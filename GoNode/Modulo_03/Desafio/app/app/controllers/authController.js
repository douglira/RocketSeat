const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Credentials not provided' });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      return res.json({
        user,
        token: await user.generateToken(),
      });
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

      return res.json({
        user,
        token: await user.generateToken(),
      });
    } catch (err) {
      return next(err);
    }
  },
};
