const usersHelper = require('./core/usersHelper');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const favouriteHelper = require('./core/favouriteHelper');
const { secret } = require('./config');
const validator = require('validator');

const generateAccessToken = (id, role) => {
  const payload = {
    id,
    role,
  };

  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class AuthController {
  async registration(req, res) {
    try {
      const { first_name, second_name, email, phone, password } = req.body;
      const favouritesCount = 0;

      const checkValidation = () => {
        if (!validator.isEmail(email)) {
          return false;
        }

        if (!validator.isLength(phone, { min: 16 })) {
          return false;
        }

        if (!validator.isLength(first_name.trim(), { min: 2 })) {
          return false;
        }

        if (!validator.isLength(second_name.trim(), { min: 2 })) {
          return false;
        }

        if (!validator.isLength(password.trim(), { min: 5 })) {
          return false;
        }

        return true;
      };

      if (!checkValidation()) {
        req.session.error = 'Ivalid data';
        res.redirect('/authorization');
      }

      let newUser = await usersHelper.userFirst({ email });

      if (newUser) {
        req.session.error = 'User with this login already exists';
        res.redirect('/authorization');

        return res.send();
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

      await usersHelper.updateUser(newUser.id, { token });

      res.cookie('token', token, {
        maxAge: 900000,
        httpOnly: true,
      });

      res.cookie('favouritesCount', favouritesCount, {
        maxAge: 900000,
        httpOnly: true,
      });
      res.redirect('/');
    } catch (e) {
      res.status(400, {
        message: 'Registration error',
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const checkValidation = () => {
        if (!validator.isEmail(email)) {
          return false;
        }

        if (!validator.isLength(password.trim(), { min: 5 })) {
          return false;
        }

        return true;
      };

      if (!checkValidation()) {
        req.session.error = 'Ivalid data';
        res.redirect('/authorization');

        return res.send();
      }

      const user = await usersHelper.userFirst({ email });
      let favouritesCount;

      if (user) {
        favouritesCount = await favouriteHelper.favLengthByUserId(user.id);
      }

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

      await usersHelper.updateUser(user.id, { token });

      res.cookie('token', token, {
        maxAge: 900000,
        httpOnly: true,
      });

      res.cookie('favouritesCount', favouritesCount, {
        maxAge: 900000,
        httpOnly: true,
      });

      res.redirect('/');
    } catch (e) {
      res.status(400, {
        message: 'Registration error',
      });
    }
  }

  logout(req, res) {
    try {
      res.clearCookie('token');

      res.cookie('favouritesCount', 0, {
        maxAge: 900000,
        httpOnly: true,
      });
      res.redirect('/authorization');
    } catch (e) {
      res.status(400, {
        message: 'Registration error',
      });
    }
  }
}

module.exports = new AuthController();
