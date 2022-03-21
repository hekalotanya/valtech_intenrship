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

  return jwt.sign(payload, secret, { expiresIn: '24h' });
}


class authController {
  async registration(req, res) {
    try {

      const { first_name, second_name, email, phone, password } = req.body;

      let newUser = await usersHelper.userFirst({ email });
      if (newUser) {
        req.session.error = 'User with this login already exists';
        res.redirect('/authorization');
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const fullName = `${first_name} ${second_name}`;

      newUser = await usersHelper.createUser({
        email,
        name: fullName,
        phone,
        password: hashPassword,
      });

      const token = generateAccessToken(newUser.id, newUser.role);


      let updatedUser = await usersHelper.updateUser(newUser.id, { token });

      console.log(updatedUser.token);

      res.cookie('token', token, { maxAge: 900000, httpOnly: true });
      res.redirect('/');

    } catch (e) {
      res.status(400, {
        message: 'Registration error',
      })
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await usersHelper.userFirst({email});

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
      res.redirect('/');
    } catch (e) {
      res.status(400, {
        message: 'Registration error',
      })
    }
  }

  async logout(req, res) {
    try {
      res.cookie('token', token, { maxAge: 0, httpOnly: true });
      res.redirect('/authorization');
    }

    catch (e) {
      res.status(400, {
        message: 'Registration error',
      })
    }
  }
}

module.exports = new authController();