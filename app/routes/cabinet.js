const express = require('express');
const router = express.Router();
const usersHelper = require('./core/usersHelper');
const orderHelper = require('./core/ordersHelper');
const favouriteHelper = require('./core/favouriteHelper');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

/* GET cabinet page. */
router.get('/', async function(req, res, next) {
  let { token, favouritesCount } = req.cookies;
  let authorization = !!token;

  if (!authorization) {
    res.redirect('/authorization');
  }

  if (!favouritesCount) {
    favouritesCount = 0;
  }
  const { error, success } = req.session;
  req.session.destroy();
  let user;
  let favourites;
  
  try {
    if (token) {
      user = await usersHelper.userFirst({ token });
      favourites = await favouriteHelper.favouritesByUserId(user.id);
      favouritesCount = favourites.length;
    }

    if (user) {
      const orders = await orderHelper.ordersByUserId(user.id);
      res.render('cabinet', { title: 'Cabinet', user, authorization, error, success, orders, favourites, favouritesCount });
    } 
  }

  catch(e) {
    res.send(e)
  }
});

router.post('/updateData', async function(req, res, next) {
  const { token } = req.cookies;
  const { name, phone, email} = req.body;
  let authorization = !!token;
  
  try {
    if (authorization) {
      let decoded = jwt.decode(token, secret);
      const updatedUser = usersHelper.updateUser(decoded.id, {name, phone, email});
      req.session.success = 'Data was apdated';
      res.redirect('/cabinet')
    }
  }

  catch(e) {
    res.send(e)
  }
});


router.post('/updatePassword', async function(req, res, next) {
  const { token } = req.cookies;
  const { password, new_password} = req.body;
  let authorization = !!token;
  let user;
  let decoded;
  
  try {
    if (authorization) {
      decoded = jwt.decode(token, secret);
      user = await usersHelper.userById(decoded.id);
      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        req.session.error = 'Invalid password';
        res.redirect('/cabinet');
      } else {
        const hashPassword = bcrypt.hashSync(new_password, 7);
        const updatedUser = usersHelper.updateUser(decoded.id, {password: hashPassword});
        req.session.success = 'Data was apdated';
        res.redirect('/cabinet')
      }
    }
  }

  catch(e) {
    res.send(e)
  }
});


module.exports = router;