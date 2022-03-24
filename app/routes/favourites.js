const express = require('express');
const router = express.Router();
const usersHelper = require('./core/usersHelper');
const favouriteHelper = require('./core/favouriteHelper');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

router.get('/:productId', async function(req, res, next) {
  let { token, favouritesCount } = req.cookies;
  let decoded = jwt.decode(token, secret);
  let favourite;
  let authorization = !!token;

  if (authorization) {
    checkRepeatFav = await favouriteHelper.findFavouriteByParams(decoded.id, parseInt(req.params.productId));
    if (checkRepeatFav) {
      res.status(500).send({error: {message: 'It has already been added'}});
      return;
    }

    favourite = await favouriteHelper.createFavourite({user_id: decoded.id, product_id: parseInt(req.params.productId)});
    favouritesCount = +favouritesCount + 1;
    res.cookie('favouritesCount', favouritesCount, { maxAge: 900000, httpOnly: true });
    res.status(304).send() 
  } else {
    res.status(500).send({error: {message: 'You must be log in'}});
  }
});

router.get('/delete/:productId', async function(req, res, next) {
  const { token } = req.cookies;
  let favouritesCount;
  let authorization = !!token;
  let decoded = jwt.decode(token, secret);

  console.log(authorization);

  if (authorization) {
    const productId = parseInt(req.params.productId);
    console.log(productId);
    const deletedFavourite = await favouriteHelper.deleteFavourite(decoded.id, productId);
    favouritesCount = await favouriteHelper.favLengthByUserId(decoded.id);
    res.cookie('favouritesCount', favouritesCount, { maxAge: 900000, httpOnly: true });
    res.status(200).send();
  } 
});

module.exports = router;