const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');
const categoriesHelper = require('./core/categoriesHelper');
const { get } = require('request');

router.use(cors());




/* GET products listing. */
router.get('/', function(req, res, next) {
  res.render('product_detail', {
    title: 'Product Detail',
  });
});


module.exports = router;