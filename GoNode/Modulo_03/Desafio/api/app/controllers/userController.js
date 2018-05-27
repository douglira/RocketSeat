const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async updateProfile(req, res, next) {
    try {
      const user = await User.findByIdAndUpdate(req.userId, { ...req.body }, { new: true });

      return res.json(user);
    } catch (err) {
      return next(err);
    }
  },

  async updatePassword(req, res, next) {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body;

      if (!oldPassword || !newPassword || !confirmPassword) {
        return res.status(400).json({ error: 'Invalid passwords' });
      }

      if (newPassword !== confirmPassword) {
        return res.status(400).json({ error: "Password doesn't match" });
      }

      const user = await User.findById(req.userId).select('+password');

      if (!(await user.compareHash(oldPassword))) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      user.password = newPassword;
      await user.save();

      return res.json({ message: 'Password changed successfully' });
    } catch (err) {
      return next(err);
    }
  },
};
