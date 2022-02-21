const express = require('express');
const router = express.Router();
const productsHelper = require('./core/productsHelper');

let allProducts;

productsHelper.products().then(result => {
  allProducts = [...result];
})

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(allProducts[0]);
  res.render('index', {
    products: [...allProducts].slice(0,9),
    productsDeal: [...allProducts].slice(11,15),
    categories: [...allProducts].slice(20,24)
  });
});

module.exports = router;
