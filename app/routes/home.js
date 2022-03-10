const express = require('express');
const router = express.Router();
const productsHelper = require('./core/productsHelper');


/* GET home page. */
router.get('/', async function(req, res, next) {
  function getProducts() {
    const result =  productsHelper.products(10,4);
    return result;
  }

  function getDealProducts() {
    const result =  productsHelper.productsByParams({sale: true}, 10, 4);
    return result;
  }

  function getSpecialProducts() {
    const result =  productsHelper.productsByParams({best_seller: true}, 0, 7);
    return result;
  }

  let allProducts = await getProducts();
  let dealProducts = await getDealProducts();
  let specialProducts = await getSpecialProducts();

  res.render('index', {
    products: allProducts,
    specialProducts: specialProducts,
    productsDeal: dealProducts,
    categories: allProducts
  });
});

module.exports = router;
