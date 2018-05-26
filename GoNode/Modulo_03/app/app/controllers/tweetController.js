const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet');
const User = mongoose.model('User');

module.exports = {
  async create(req, res, next) {
    try {
      const tweet = await Tweet.create({ ...req.body, user: req.userId });

      return res.json(tweet);
    } catch (err) {
      return next(err);
    }
  },

  async feed(req, res, next) {
    try {
      const user = await User.findById(req.userId);
      const { following } = user;

      const tweets = await Tweet.find({
        user: { $in: [user.id, ...following] },
      })
        .limit(50)
        .sort('-createdAt');

      return res.json(tweets);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      await Tweet.findByIdAndRemove(req.params.id);

      return res.json();
    } catch (err) {
      return next(err);
    }
  },
};
