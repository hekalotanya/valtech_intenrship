const express = require('express');
const router = express.Router();
const productsHelper = require('./core/productsHelper');

let allProducts;

productsHelper.products().then(result => {
  allProducts = [...result];
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    products: [...allProducts].slice(0,4),
    specialProducts: [...allProducts].slice(0,7),
    productsDeal: [...allProducts].slice(31,35),
    categories: [...allProducts].slice(20,24)
  });
});

module.exports = router;
