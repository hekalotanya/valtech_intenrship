const express = require('express');
const router = express.Router();
const productsHelper = require('./core/productsHelper');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;

  if (!favouritesCount) {
    favouritesCount = 0;
  }

  const authorization = !!token;

  function getProducts() {
    const result = productsHelper.products(10, 4);

    return result;
  }

  function getDealProducts() {
    const result = productsHelper.productsByParams({ sale: true }, 10, 4);

    return result;
  }

  function getSpecialProducts() {
    const result = productsHelper.productsByParams({ best_seller: true }, 0, 7);

    return result;
  }

  const allProducts = await getProducts();
  const dealProducts = await getDealProducts();
  const specialProducts = await getSpecialProducts();

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
