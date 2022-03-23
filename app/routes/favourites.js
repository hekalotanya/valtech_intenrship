const express = require('express');
const router = express.Router();
const usersHelper = require('./core/usersHelper');
const favouriteHelper = require('./core/favouriteHelper');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

router.get('/:productId', async function(req, res, next) {
  const { token } = req.cookies;
  let decoded = jwt.decode(token, secret);
  let favourite;

  let authorization = !!token;

  if (authorization) {
    favourite = await favouriteHelper.createFavourite({user_id: decoded.id, product_id: parseInt(req.params.productId)});
    res.status(304).send() 
  } else {
    res.status(500).send() 
  }
});

router.get('/delete/:productId', async function(req, res, next) {
  const { token } = req.cookies;
  let authorization = !!token;
  let decoded = jwt.decode(token, secret);

  if (authorization) {
    const productId = parseInt(req.params.productId);
    console.log(productId);
    deletedFavourite = await favouriteHelper.deleteFavourite(decoded.id, productId);
    res.redirect('/cabinet')
  } else {
    res.status(500).send() 
  }
});

module.exports = router;