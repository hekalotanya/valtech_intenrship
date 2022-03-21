const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usersHelper = require('./core/usersHelper');
const bcrypt = require('bcryptjs');

/* GET cabinet page. */
router.get('/', async function(req, res, next) {
  const { token } = req.cookies;
  const { error, success } = req.session;
  let authorization = !!token;
  let user;
  
  try {
    if (token) {
      user = await usersHelper.userFirst({ token });
    }

    if (user) {
      res.render('cabinet', { title: 'Cabinet', user, authorization, error, success });
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
      const user = await usersHelper.userFirst({ token });
      const updatedUser = usersHelper.updateUser(user.id, {name, phone, email});
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
  
  try {
    if (authorization) {
      user = await usersHelper.userFirst({ token });
  
      if (!user) {
        res.send('error');
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        req.session.error = 'Invalid password';
        req.session.success = 'Data was apdated';
        res.redirect('/cabinet');
      } else {
        const hashPassword = bcrypt.hashSync(new_password, 7);
        const updatedUser = usersHelper.updateUser(user.id, {password: hashPassword});
        res.redirect('/cabinet')
      }
    }
  }

  catch(e) {
    res.send(e)
  }
});


module.exports = router;