const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usersHelper = require('./core/usersHelper');


/* GET cabinet page. */
router.get('/', function(req, res, next) {
  console.log('cabinet page')
  res.render('cabinet', { title: 'Cabinet' });
});


module.exports = router;