const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());
const productsHelper = require('./core/productsHelper');
const ordersHelper = require('./core/ordersHelper');
const usersHelper = require('./core/usersHelper');

let products;
let orderId;

router.get('/', async function(req, res, next) {
  let productsCart;
   const { token } = req.cookies;

  let authorization = !!token;

  const user = await usersHelper.userFirst({ token });

  if (products) {
    productsCart = await Promise.all(products);
  }


  if (productsCart) {
    res.render('checkout',{
      title: 'Checkout',
      products: productsCart,
      user,
      authorization,
    });
  } else {
    res.render('checkout',{
      title: 'Checkout',
      noResult: true,
      user,
      authorization,
    });
  }
});

router.post('/order', async function(req, res, next) {
  const { quantityList, email, first_name, second_name, country, postcode, city, adress, phone, totalAmount} = req.body;
  const fullAdress = `${country}, ${postcode}, city ${city}, ${adress}`;
  const fullName = `${first_name} ${second_name}`;
  const date = new Date();

  const order = {
    user_name: fullName,
    user_adress: fullAdress,
    user_phone: phone,
    user_email: email,
    total_price: totalAmount,
    date: date.toLocaleDateString("en-US"),
  }

  const orderResult = await ordersHelper.createOrder(order);
  orderId = orderResult;

  for (let key in quantityList) {
    const product = {
      product_id: parseInt(key),
      order_id: orderResult,
      count: parseInt(quantityList[key]),
    }
    const orderProduct = ordersHelper.createOrderProduct(product);
  }

  res.redirect('/checkout/order');
});

router.get('/order', async function(req, res, next) {
  const { token } = req.cookies;

  let authorization = !!token;

  res.render('order', {
    orderId,
    title: 'Checkout',
    authorization,
  })
});


router.post('/', function(req, res, next) {
  let cartProducts = [];
  const listOfId = req.body;

  async function getProduct(id) {
    const response =  await productsHelper.productById(id);
    return response;
  }

  listOfId.map(id => {
    const product = getProduct(id);
    cartProducts.push(product);
  })

  products = [...cartProducts];
  res.redirect('/checkout');
});

module.exports = router;
