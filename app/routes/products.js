const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');
const categoriesHelper = require('./core/categoriesHelper');
const { get } = require('request');

router.use(cors());

let allProducts;
let allCategories;

categoriesHelper.categories().then(result => {
  allCategories = [...result];
})

productsHelper.products().then(result => {
  allProducts = [...result];
})



/* GET products listing. */
router.get('/', function(req, res, next) {
  res.render('products', {
    products: [...allProducts].slice(0,6),
    firstProduct: 1,
    lastProduct: 6,
    categories: [...allCategories],
    length: allProducts.length,
    title: 'Shop List Side Bar',
  });
});

router.get('/sort', async function(req, res, next) {
  const { page } = req.query;
  params = req.query;
  console.log(params);
  let searchProducts = [];
  let limit = 6;
  let firstProduct = 0;
  let lastProduct = firstProduct + limit;

  if (params.category_id) {
    params.category_id = parseInt(params.category_id);
  }

  if (params.size) {
    params.size = parseInt(params.size);
  }

  delete params.page;

  console.log(params);

  if (page) {
    firstProduct = limit * (page - 1);
    lastProduct = firstProduct + limit;
  }

  function getProducts() {
    const result =  productsHelper.productsByParams({ ...params });
    return result;
  }

  searchProducts = await getProducts();

  console.log('2',searchProducts);

  if (searchProducts.length) {
      res.render('products', {
        products: searchProducts.slice(firstProduct,lastProduct),
        categories: [...allCategories],
        length: searchProducts.length,
        firstProduct: firstProduct+1,
        lastProduct,
        title: 'Shop List Side Bar',
      });
  } else {
      res.render('products', {
        noResult: true,
        categories: [...allCategories],
        length: searchProducts.length,
        title: 'Shop List Side Bar',
      });
    }
});


module.exports = router;
