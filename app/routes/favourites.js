const express = require('express');
const router = express.Router();
const usersHelper = require('./core/usersHelper');
const favouriteHelper = require('./core/favouriteHelper');

router.get('/:productId', async function(req, res, next) {
  const { token } = req.cookies;
  let favourite;

  let authorization = !!token;

  const user = await usersHelper.userFirst({ token });

  if (authorization) {
    favourite = await favouriteHelper.createFavourite({user_id: user.id, product_id: parseInt(req.params.productId)});
    res.status(304).send() 
  } else {
    res.status(500).send() 
  }
});

router.get('/delete/:productId', async function(req, res, next) {
  const { token } = req.cookies;
  let authorization = !!token;

  const user = await usersHelper.userFirst({ token });

  if (authorization) {
    const productId = parseInt(req.params.productId);
    console.log(productId);
    deletedFavourite = await favouriteHelper.deleteFavourite(user.id, productId);
    res.redirect('/cabinet')
  } else {
    res.status(500).send() 
  }
});

module.exports = router;