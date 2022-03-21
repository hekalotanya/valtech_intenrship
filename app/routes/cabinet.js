const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usersHelper = require('./core/usersHelper');

/* GET cabinet page. */
router.get('/', async function(req, res, next) {
  const { token } = req.cookies;
  let authorization = !!token;
  
  try {
    const user = await usersHelper.userFirst({ token });

    if (user) {
      res.render('cabinet', { title: 'Cabinet', user, authorization});
    } 
  }

  catch(e) {
    res.send(e)
  }
});


module.exports = router;