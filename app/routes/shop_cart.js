const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');

router.use(cors());

let products;



/* GET products listing. */
router.get('/', async function(req, res, next) {
  let productsCart;
  if (products) {
    productsCart = await Promise.all(products);
  }

  if (productsCart) {
    res.render('shop_cart',{
      title: 'Shop Cart',
      products: productsCart,
    });
  } else {
    res.render('shop_cart',{
      title: 'Shop Cart',
      noResult: true,
    });
  }
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
  res.redirect("/cart");

});

module.exports = router;
