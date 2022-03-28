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
  let { favouritesCount } = req.cookies;
  const { token } = req.cookies;
  const authorization = !!token;

  if (!authorization) {
    res.redirect('/authorization');
  }

  if (!favouritesCount) {
    favouritesCount = 0;
  }

  const { error, success } = req.session;
  let user;
  let favourites;

  req.session.destroy();

  try {
    if (token) {
      user = await usersHelper.userFirst({ token });
      favourites = await favouriteHelper.favouritesByUserId(user.id);
      favouritesCount = favourites.length;
    }

    if (user) {
      const orders = await orderHelper.ordersByUserId(user.id);

      res.render('cabinet', {
        title: 'Cabinet',
        user,
        authorization,
        error,
        success,
        orders,
        favourites,
        favouritesCount,
      });
    }
  } catch (e) {
    res.send(e);
  }
});

router.post('/updateData', async function(req, res, next) {
  const { token } = req.cookies;
  const { name, phone, email } = req.body;
  const authorization = !!token;

  try {
    if (authorization) {
      const decoded = jwt.decode(token, secret);

      await usersHelper.updateUser(decoded.id, {
        name,
        phone,
        email,
      });

      req.session.success = 'Data was updated';
      res.redirect('/cabinet');
    }
  } catch (e) {
    res.send(e);
  }
});

router.post('/updatePassword', async function(req, res, next) {
  const { token } = req.cookies;
  const { password, new_password } = req.body;
  const authorization = !!token;
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

        usersHelper.updateUser(decoded.id, { password: hashPassword });

        req.session.success = 'Data was updated';
        res.redirect('/cabinet');
      }
    }
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
