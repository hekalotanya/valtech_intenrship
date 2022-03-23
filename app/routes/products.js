const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('./core/productsHelper');
const categoriesHelper = require('./core/categoriesHelper');
const usersHelper = require('./core/usersHelper');
const favouriteHelper = require('./core/favouriteHelper');

router.use(cors());

function getCategories() {
  const result =  categoriesHelper.categories();
  return result;
}



/* GET products listing. */
router.get('/', async function(req, res, next) {

  function getProducts() {
    const result =  productsHelper.products();
    return result;
  }

  let allProducts = await getProducts();
  let allCategories = await getCategories();

  let { token, favouritesCount } = req.cookies;
  if (!favouritesCount) {
    favouritesCount = 0;
  }

  let authorization = !!token;

  const user = await usersHelper.userFirst({ token });

  res.render('products', {
    products: [...allProducts].slice(0,6),
    firstProduct: 1,
    lastProduct: 6,
    categories: [...allCategories],
    length: allProducts.length,
    title: 'Shop List Side Bar',
    priceGre: '0',
    priceLess: '200',
    user,
    authorization,
    favouritesCount,
  });
});

/* GET products with params. */
router.get('/sort', async function(req, res, next) {
  const { page } = req.query;
  let { price } = req.query;
  params = req.query;
  let searchProducts = [];
  let limit = 6;
  let firstProduct = 0;
  let lastProduct = firstProduct + limit;
  let priceGre = 0;
  let priceLess = 200;
  let allCategories = await getCategories();

  const { token, favouritesCount } = req.cookies;
  let authorization = !!token;

  const user = await usersHelper.userFirst({ token });

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
    const result =  productsHelper.productsByParams({ ...params, price: {
      lte: parseInt(priceLess),
      gte: parseInt(priceGre),
    } });
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
        products: searchProducts.slice(firstProduct,lastProduct),
        categories: [...allCategories],
        length: searchProducts.length,
        firstProduct: firstProduct+1,
        lastProduct,
        title: 'Shop List Side Bar',
        priceGre,
        priceLess,
        user,
        authorization,
        favouritesCount
      });
  } else {
      res.render('products', {
        noResult: true,
        categories: [...allCategories],
        length: searchProducts.length,
        title: 'Shop List Side Bar',
        priceGre,
        priceLess,
        user,
        favouritesCount,
        authorization,
      });
    }
});



/* GET product detail. */
router.get('/:productId', async function(req, res, next) {
  let product;
  let { token, favouritesCount } = req.cookies;
  if (!favouritesCount) {
    favouritesCount = 0;
  }

  let authorization = !!token;

  const user = await usersHelper.userFirst({ token });

  function getProduct() {
    const result =  productsHelper.productById(parseInt(req.params.productId));
    return result;
  }

  product = await getProduct();

  res.render('product_detail', {
    title: 'Product Detail',
    product,
    user,
    authorization,
    favouritesCount,
  });
});


module.exports = router;
