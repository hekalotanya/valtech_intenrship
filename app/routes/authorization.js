const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('./authController');

router.use(bodyParser.json());

/* GET authorization page. */
router.get('/', function(req, res, next) {
  const { token } = req.cookies;
  const { error } = req.session;

  req.session.destroy();

  if (token) {
    res.redirect('/');
  } else {
    res.render('authorization', { error });
  }
});

router.post('/login', controller.login);
router.post('/registration', controller.registration);
router.get('/logout', controller.logout);

module.exports = router;
