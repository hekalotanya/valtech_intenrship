const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');
const reviewsHelper = require('./core/reviewsHelper');

router.use(bodyParser.json());

/* CREATE REVIEW. */
router.post('/', async function(req, res, next) {
  const { token } = req.cookies;
  const { review_body, productId } = req.body;
  const decoded = jwt.decode(token, secret);
  const authorization = !!token;

  if (authorization) {
    const review = await reviewsHelper.createReview({
      user_id: decoded.id,
      body: review_body,
      product_id: parseInt(productId),
    });

    res.status(200).send();
  }
  res.status(400).send();
});

module.exports = router;
