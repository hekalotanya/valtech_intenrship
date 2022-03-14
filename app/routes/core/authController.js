const usersHelper = require('../core/usersHelper');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const { secret } = require('../config');

const generateAccessToken = (id, role) => {
  const payload = {
    id,
    role,
  }

  return jwt.sign(payload, secret, {expiresIn: '24h'});
}


class authController {
  async registration(req, res) {
    try {

      const { first_name, second_name, email, phone, password } = req.body;

      console.log(req.body,'req');

      let newUser = await usersHelper.userFirst({ email });
      if (newUser) {
        req.session.error = 'User with this login already exists';
        res.redirect('/authorization');
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const fullName = `${first_name} ${second_name}`;

      newUser = await usersHelper.createUser({
        role: 'member',
        email,
        name: fullName,
        phone,
        password: hashPassword,
      });

      console.log(newUser,'newUser');
      req.session.user = user;
      req.session.authorization = true;
      res.redirect('/');

    } catch (e) {
      console.log(e);
      res.status(400, {
        message: 'Registration error',
      })
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await usersHelper.userFirst({email});
      console.log(user);

      if (!user) {
        req.session.error = 'User with this login does not exist';
        res.redirect('/authorization');
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        req.session.error = 'Invalid password';
        res.redirect('/authorization');
      }

      const token = generateAccessToken(user.id, user.role);
      req.session.user = user;
      req.session.authorization = true;
      res.redirect('/');
    } catch (e) {
      console.log(e);
      res.status(400, {
        message: 'Registration error',
      })
    }
  }
}

module.exports = new authController();