const express = require('express');
const router = express.Router();
const favouriteHelper = require('./core/favouriteHelper');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

router.get('/:productId', async function(req, res, next) {
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;
  const decoded = jwt.decode(token, secret);
  const authorization = !!token;

  if (authorization) {
    await favouriteHelper.createFavourite({
      user_id: decoded.id,
      product_id: parseInt(req.params.productId),
    });

    favouritesCount = +favouritesCount + 1;

    res.cookie('favouritesCount', favouritesCount, {
      maxAge: 900000,
      httpOnly: true,
    });
    res.status(200).send();
  } else {
    res.status(400).send({ error: { message: 'You must be log in' } });
  }
});

router.get('/delete/:productId', async function(req, res, next) {
  const { token } = req.cookies;
  let favouritesCount;
  const authorization = !!token;
  const decoded = jwt.decode(token, secret);

  if (authorization) {
    const productId = parseInt(req.params.productId);

    await favouriteHelper.deleteFavourite(decoded.id, productId);

    favouritesCount = await favouriteHelper.favLengthByUserId(decoded.id);

    res.cookie('favouritesCount', favouritesCount, {
      maxAge: 900000,
      httpOnly: true,
    });
    res.status(200).send();
  }
});

module.exports = router;
