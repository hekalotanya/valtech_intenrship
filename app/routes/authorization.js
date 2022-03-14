const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const usersHelper = require('./core/usersHelper');
const controller = require('./core/authController');
const { check } = require('express-validator');


const accessTokenSecret = 'ilakvngsxldbfwmibmyksecret';

router.use(bodyParser.json());

/* GET authorization page. */
router.get('/', function(req, res, next) {
  const { error } = req.session;
  req.session.destroy();
  res.render('authorization', { error });
});

router.post('/login', controller.login);
router.post('/registration', controller.registration);

module.exports = router;
