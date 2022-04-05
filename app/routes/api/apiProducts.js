const express = require('express');
const router = express.Router();
const cors = require('cors');
const productsHelper = require('../core/productsHelper');
const { secret } = require('../config');
const jwt = require('jsonwebtoken');

router.use(cors());

router.all('/', async function(req, res, next) {
  const { token } = req.cookies;
  const authorization = !!token;
  const decoded = jwt.decode(token, secret);

  if (authorization) {
    console.log(decoded.role);
    if (decoded.role === 'admin') {
      next();
      return;
    }
  }

  return res.send('error');
});

/* GET products with params. */

router.get('/?', async function(req, res, next) {
  const paramsObject = req.query;

  if (paramsObject.category_id) {
    paramsObject.category_id = parseInt(paramsObject.category_id);
  }

  if (paramsObject.price) {
    paramsObject.price = parseInt(paramsObject.price);
  }

  if (paramsObject.last_price) {
    paramsObject.last_price = parseInt(paramsObject.last_price);
  }

  if (paramsObject.size) {
    paramsObject.size = parseInt(paramsObject.size);
  }

  if (paramsObject.best_seller) {
    switch (paramsObject.best_seller) {
      case 'true':
        paramsObject.best_seller = true;
        break;
      case 'false':
        paramsObject.best_seller = false;
        break;
    }
  }

  if (paramsObject.sale) {
    switch (paramsObject.sale) {
      case 'true':
        paramsObject.sale = true;
        break;
      case 'false':
        paramsObject.sale = false;
        break;
    }
  }

  try {
    const products = await productsHelper.productsByParams(paramsObject);

    res.json(products);
  } catch (e) {
    res.json(e);
  }

  return;
});

/* GET all products. */
router.get('/', async function(req, res, next) {
  try {
    const products = await productsHelper.products();

    res.json(products);
  } catch (e) {
    res.json(e);
  }

  return;
});

/* GET product detail PAGE. */
router.get('/:productId', async function(req, res, next) {
  try {
    const result = await productsHelper.productById(parseInt(req.params.productId));

    res.json(result);
  } catch (e) {
    res.json(e);
  }

  return;
});

/*  UPDATE PRODUCT */

router.post('/:productId', async function(req, res, next) {
  const data = req.body;

  if (data.category_id) {
    data.category_id = parseInt(data.category_id);
  }

  if (data.price) {
    data.price = parseInt(data.price);
  }

  if (data.last_price) {
    data.last_price = parseInt(data.last_price);
  }

  if (data.size) {
    data.size = parseInt(data.size);
  }

  if (data.best_seller) {
    switch (data.best_seller) {
      case 'true':
        data.best_seller = true;
        break;
      case 'false':
        data.best_seller = false;
        break;
    }
  }

  if (data.sale) {
    switch (data.sale) {
      case 'true':
        data.sale = true;
        break;
      case 'false':
        data.sale = false;
        console.log(typeof(data.sale));
        break;
    }
  }

  try {
    const result = await productsHelper.updateProduct(parseInt(req.params.productId), data);

    res.json(result);
  } catch (e) {
    res.json(e);
  }

  return;
});

module.exports = router;
