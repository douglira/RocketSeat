const mongoose = require('mongoose');

const User = mongoose.model('User');

const sendMail = require('../services/mailer');

module.exports = {
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Credentials not provided' });
      }

      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      user.password = undefined;
      const token = await user.generateToken();

      return res.cookie('token', token, { maxAge: 900000, httpOnly: true }).json({ user });
    } catch (err) {
      return next(err);
    }
  },

  async signup(req, res, next) {
    try {
      const { email, password, confirmPassword } = req.body;

      if (await User.findOne({ email })) {
        return res.status(400).json({ error: 'User already exists' });
      }

      if (!password || password !== confirmPassword) {
        return res.status(400).json({ error: 'Please, send a valid password' });
      }

      const user = await User.create(req.body);
      const token = await user.generateToken();
      return res
        .status(201)
        .cookie('token', token, { maxAge: 86400, httpOnly: true })
        .json({ user });
    } catch (err) {
      return next(err);
    }
  },

  async forgotPass(req, res, next) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: 'Invalid email' });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: 'User does not exist' });
      }

      await user.resetPass();
      await user.save();
      sendMail({
        from: 'Test App <test.app@mail.com>',
        to: email,
        subject: 'FACEROCKET - Redefinição de senha',
        template: 'auth/resetPassToken',
        context: {
          email,
          token: user.passwordResetToken,
        },
      });

      return res.json({
        message: 'Successfully password reset request. You will receive an email shortly',
      });
    } catch (err) {
      return next(err);
    }
  },

  async resetPass(req, res, next) {
    try {
      const { token, password, confirmPassword } = req.body;

      if (!token) {
        return res.status(400).json({ error: 'Token not provided' });
      }

      if (!password || !confirmPassword) {
        return res.status(400).json({ error: 'Invalid passwords' });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Password doesn't match" });
      }

      const user = await User.findOne({ passwordResetToken: token });

      if (!user) {
        return res.status(400).json({ error: 'Invalid token provided' });
      }

      const expiresIn = user.passwordResetExpiresIn;
      const now = new Date();

      if (now > expiresIn) {
        return res
          .status(400)
          .json({ error: 'Token expired. Please require again to reset password' });
      }

      user.password = password;
      user.passwordResetToken = undefined;
      user.passwordResetExpiresIn = undefined;
      await user.save();

      return res.json();
    } catch (err) {
      return next(err);
    }
  },

  async verifyAuthentication(req, res, next) {
    try {
      const { userId: id } = req;

      if (!id) {
        return res.status(401).json({ error: 'You are not authorized' });
      }

      const user = await User.findById(id);

      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }

      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  },
};
