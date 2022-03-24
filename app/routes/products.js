const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');
const categoriesHelper = require('./core/categoriesHelper');

router.use(cors());

function getCategories() {
  const result = categoriesHelper.categories();

  return result;
}

/* GET products listing. */
router.get('/', async function(req, res, next) {
  function getProducts() {
    const result = productsHelper.products();

    return result;
  }

  const allProducts = await getProducts();
  const allCategories = await getCategories();
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;

  if (!favouritesCount) {
    favouritesCount = 0;
  }

  const authorization = !!token;

  res.render('products', {
    products: [...allProducts].slice(0, 6),
    firstProduct: 1,
    lastProduct: 6,
    categories: [...allCategories],
    length: allProducts.length,
    title: 'Shop List Side Bar',
    priceGre: '0',
    priceLess: '200',
    authorization,
    favouritesCount,
  });
});

/* GET products with params. */
router.get('/sort', async function(req, res, next) {
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
    });

    return result;
  }

  searchProducts = await getProducts();

  if (page) {
    if (searchProducts.length > limit) {
      firstProduct = limit * (page - 1);
      lastProduct = firstProduct + limit;
    }
  }

  if (searchProducts.length) {
    res.render('products', {
      products: searchProducts.slice(firstProduct, lastProduct),
      categories: [...allCategories],
      length: searchProducts.length,
      firstProduct: firstProduct + 1,
      lastProduct,
      title: 'Shop List Side Bar',
      priceGre,
      priceLess,
      authorization,
      favouritesCount,
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
