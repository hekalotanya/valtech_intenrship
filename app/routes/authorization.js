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
  const { token } = req.cookies;
  const { error } = req.session;
  req.session.destroy();

  if (token) {
    res.redirect('/');
    console.log(token);
  } else {
    res.render('authorization', { error });
  }
});

router.post('/login', controller.login);
router.post('/registration', controller.registration);
router.get('/logout')

module.exports = router;
