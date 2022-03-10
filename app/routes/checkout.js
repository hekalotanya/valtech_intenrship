const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());

router.get('/', function(req, res, next) {
  res.render('checkout', {
    title: 'Checkout',
  });
});

module.exports = router;
