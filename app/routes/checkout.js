const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');
const ordersHelper = require('./core/ordersHelper');
const usersHelper = require('./core/usersHelper');
let products;
let orderId;

router.use(cors());

router.get('/', async function(req, res, next) {
  let productsCart;
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;

  if (!favouritesCount) {
    favouritesCount = 0;
  }

  const authorization = !!token;

  if (products) {
    productsCart = await Promise.all(products);
  }

  if (productsCart) {
    res.render('checkout', {
      title: 'Checkout',
      products: productsCart,
      authorization,
      favouritesCount,
    });
  } else {
    res.render('checkout', {
      title: 'Checkout',
      noResult: true,
      authorization,
      favouritesCount,
    });
  }
});

router.post('/order', async function(req, res, next) {
  const { token } = req.cookies;
  const authorization = !!token;
  let fullName;
  const {
    quantityList,
    email,
    first_name,
    second_name,
    country,
    postcode,
    city,
    adress,
    phone,
    totalAmount,
  } = req.body;

  const fullAdress = `${country}, ${postcode}, city ${city}, ${adress}`;

  if (!authorization) {
    fullName = `${first_name} ${second_name}`;
  }

  const date = new Date();
  const user = await usersHelper.userFirst({ token });
  let order;

  if (authorization) {
    order = {
      user_id: user.id,
      user_name: user.name,
      user_phone: user.phone,
      user_email: user.email,
      user_adress: fullAdress,
      total_price: totalAmount,
      date: date.toLocaleDateString('en-US'),
    };
  } else {
    order = {
      user_name: fullName,
      user_adress: fullAdress,
      user_phone: phone,
      user_email: email,
      total_price: totalAmount,
      date: date.toLocaleDateString('en-US'),
    };
  }

  const orderResult = await ordersHelper.createOrder(order);

  orderId = orderResult;

  for (const key in quantityList) {
    const dbProduct = await productsHelper.productById(parseInt(key));
    const total_price = parseInt(quantityList[key]) * dbProduct.price;
    const product = {
      product_id: parseInt(key),
      order_id: orderResult,
      count: parseInt(quantityList[key]),
      total_price: total_price,
    };

    ordersHelper.createOrderProduct(product);
  }

  res.redirect('/checkout/order');
});

router.get('/order', async function(req, res, next) {
  const { favouritesCount } = req.cookies;
  const { token } = req.cookies;
  const authorization = !!token;

  res.render('order', {
    orderId,
    title: 'Checkout',
    authorization,
    favouritesCount,
  });
});

router.post('/', function(req, res, next) {
  const cartProducts = [];
  const listOfId = req.body;

  async function getProduct(id) {
    const response = await productsHelper.productById(id);

    return response;
  }

  listOfId.map(id => {
    const product = getProduct(id);

    cartProducts.push(product);
  });

  products = [...cartProducts];
  res.redirect('/checkout');
});

module.exports = router;
