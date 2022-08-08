const express = require('express');
const router = express.Router();
const productsHelper = require('./core/productsHelper');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;
  const authorization = !!token;

  if (!authorization) {
    favouritesCount = 0;
  }

  const allProducts = await productsHelper.products(10, 4);
  const dealProducts = await productsHelper
    .productsByParams({ sale: true }, 10, 4);
  const specialProducts = await productsHelper
    .productsByParams({ best_seller: true }, 0, 7);

  res.render('index', {
    products: allProducts,
    specialProducts: specialProducts,
    productsDeal: dealProducts,
    categories: allProducts,
    authorization,
    favouritesCount,
  });
});

module.exports = router;
