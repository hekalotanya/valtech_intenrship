const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');
const categoriesHelper = require('./core/categoriesHelper');
const favouriteHelper = require('./core/favouriteHelper');
const { secret } = require('./config');
const jwt = require('jsonwebtoken');

router.use(cors());

/* GET products with params. */
router.get('/?', async function(req, res, next) {
  let resultLength;
  const { page } = req.query;
  const { price } = req.query;
  let { sort } = req.query;
  const params = req.query;
  let searchProducts = [];
  const limit = 6;
  let firstProduct = 0;
  let lastProduct = firstProduct + limit;
  let favouritesId = 0;
  let priceGre = 0;
  let priceLess = 200;
  const allCategories = await categoriesHelper.categories();
  const { token, favouritesCount } = req.cookies;
  const authorization = !!token;
  const decoded = jwt.decode(token, secret);

  if (authorization) {
    favouritesId = await favouriteHelper.favouritesIDsByUserId(decoded.id);
  }

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
  delete params.sort;

  function getProducts() {
    if (sort) {
      sort = { [sort]: 'desc' };
    } else {
      sort = undefined;
    }

    const result = productsHelper.productsByParams({
      ...params,
      price: {
        lte: parseInt(priceLess),
        gte: parseInt(priceGre),
      },
    }, firstProduct, 6, sort);

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

  res.render('products', {
    noResult: (!searchProducts.length),
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
    favouritesId: JSON.stringify(favouritesId),
  });
});

/* GET products PAGE. */
router.get('/', async function(req, res, next) {
  const resultLength = await productsHelper.resultLength({});
  const allProducts = await productsHelper.products(0, 6);
  const allCategories = await categoriesHelper.categories();
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;
  const decoded = jwt.decode(token, secret);
  let favouritesId = [];

  const authorization = !!token;

  if (!authorization) {
    favouritesCount = 0;
  }

  if (authorization) {
    favouritesId = await favouriteHelper.favouritesIDsByUserId(decoded.id);
  }

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

/* GET product detail PAGE. */
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
