const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async create(req, res, next) {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(400).json({ error: "User doesn't exist" });
      }

      if (user.followers.indexOf(req.userId) !== -1) {
        return res.status(400).json({ error: `You're already following ${user.username}` });
      }

      user.followers.push(req.userId);
      await user.save();

      const me = await User.findById(req.userId);
      me.following.push(user.id);
      await me.save();

      return res.json(me);
    } catch (err) {
      /* istanbul ignore next */
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(400).json({ error: "User doesn't exist" });
      }

      const following = user.followers.indexOf(req.userId);

      if (following === -1) {
        return res.status(400).json({ error: `You're not following ${user.username}` });
      }

      user.followers.splice(following, 1);
      await user.save();

      const me = await User.findById(req.userId);
      me.following.splice(me.following.indexOf(user.id), 1);
      await me.save();

      return res.json(me);
    } catch (err) {
      /* istanbul ignore next */
      return next(err);
    }
  },
};
