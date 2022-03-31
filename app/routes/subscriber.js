const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const subscriberHelper = require('./core/subscribersHelper');
const validator = require('validator');
router.use(bodyParser.json());

/* CREATE SUBSCRIBER. */
router.post('/', async function(req, res, next) {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    res.status(400).send();
  }

  const checkedEmail = await subscriberHelper.getSubscriberByEmail(email);

  if (!checkedEmail) {
    const subs = await subscriberHelper.createSubscriber(email);
    console.log(subs);
  }

  res.status(200).send();
});

module.exports = router;
