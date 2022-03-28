const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');
const categoriesHelper = require('./core/categoriesHelper');
const favouriteHelper = require('./core/favouriteHelper');
const { secret } = require('./config');
const jwt = require('jsonwebtoken');

router.use(cors());

function getCategories() {
  const result = categoriesHelper.categories();

  return result;
}

/* GET products listing. */
router.get('/', async function(req, res, next) {
  const resultLength = await productsHelper.resultLength({});
  const allProducts = await productsHelper.products(0, 6);
  const allCategories = await getCategories();
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;
  const decoded = jwt.decode(token, secret);
  let favouritesId = [];

  if (!favouritesCount) {
    favouritesCount = 0;
  }

  const authorization = !!token;

  if (authorization) {
    favouritesId = await favouriteHelper.favouritesIDsByUserId(decoded.id);
  }
  console.log(favouritesId);

  res.render('products', {
    products: [...allProducts],
    firstProduct: 1,
    lastProduct: 6,
    categories: [...allCategories],
    title: 'Shop List Side Bar',
    priceGre: '0',
    priceLess: '200',
    authorization,
    favouritesCount,
    resultLength,
    favouritesId: JSON.stringify(favouritesId),
  });
});

/* GET products with params. */
router.get('/sort', async function(req, res, next) {
  let resultLength;
  const { page } = req.query;
  const { price } = req.query;
  const params = req.query;
  let searchProducts = [];
  const limit = 6;
  let firstProduct = 0;
  let lastProduct = firstProduct + limit;
  let priceGre = 0;
  let priceLess = 200;
  const allCategories = await getCategories();
  const { token, favouritesCount } = req.cookies;
  const authorization = !!token;

  if (params.category_id) {
    params.category_id = parseInt(params.category_id);
  }

  if (params.size) {
    params.size = parseInt(params.size);
  }

  if (price) {
    const priceAmount = price.split('-');

    priceGre = priceAmount[0];
    priceLess = priceAmount[1];
  }

  delete params.page;
  delete params.price;

  function getProducts() {
    const result = productsHelper.productsByParams({
      ...params,
      price: {
        lte: parseInt(priceLess),
        gte: parseInt(priceGre),
      },
    }, firstProduct, 6);

    return result;
  }

  resultLength = await productsHelper.resultLength({
    ...params,
    price: {
      lte: parseInt(priceLess),
      gte: parseInt(priceGre),
    },
  });

  if (page) {
    if (resultLength > limit) {
      firstProduct = limit * (page - 1);
      lastProduct = firstProduct + limit;
    }
  }

  searchProducts = await getProducts();

  if (resultLength < limit) {
    lastProduct = searchProducts.length;
  }

  if (searchProducts.length) {
    res.render('products', {
      products: searchProducts,
      categories: [...allCategories],
      firstProduct: firstProduct + 1,
      lastProduct,
      title: 'Shop List Side Bar',
      priceGre,
      priceLess,
      authorization,
      favouritesCount,
      resultLength,
    });
  } else {
    res.render('products', {
      noResult: true,
      categories: [...allCategories],
      length: searchProducts.length,
      title: 'Shop List Side Bar',
      priceGre,
      priceLess,
      favouritesCount,
      authorization,
      resultLength,
    });
  }
});

/* GET product detail. */
router.get('/:productId', async function(req, res, next) {
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;

  if (!favouritesCount) {
    favouritesCount = 0;
  }

  const authorization = !!token;

  function getProduct() {
    const result = productsHelper.productById(parseInt(req.params.productId));

    return result;
  }

  const product = await getProduct();

  res.render('product_detail', {
    title: 'Product Detail',
    product,
    authorization,
    favouritesCount,
  });
});

module.exports = router;
