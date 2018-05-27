const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async friendRequest(req, res, next) {
    try {
      if (req.params.id === req.userId) {
        return res.status(400).json({ error: 'You can not add yourself' });
      }

      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(400).json({ error: "User doesn't exist" });
      }

      if (user.friendsRequest.indexOf(req.userId) !== -1) {
        return res.status(400).json({ error: "You've already sent a friend request" });
      }

      if (user.friends.indexOf(req.userId) !== -1) {
        return res.status(400).json({ error: "You're both already friends" });
      }

      const me = await User.findById(req.userId);

      if (me.friendsRequest.indexOf(user.id) !== -1) {
        return res.status(400).json({
          error: `You've already received a friend request from ${
            user.name
          }. You can only accept or decline`,
        });
      }

      user.friendsRequest.push(req.userId);
      await user.save();

      return res.json();
    } catch (err) {
      return next(err);
    }
  },

  async add(req, res, next) {
    try {
      if (req.params.id === req.userId) {
        return res.status(400).json({ error: 'You can not add yourself' });
      }

      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(400).json({ error: "User doesn't exist" });
      }

      if (user.friends.indexOf(req.userId) !== -1) {
        return res.status(400).json({ error: "You're both already friends" });
      }

      const me = await User.findById(req.userId);

      if (me.friendsRequest.indexOf(user.id) === -1) {
        return res.status(400).json({ error: 'You must send a friend request first' });
      }

      me.friendsRequest.splice(me.friendsRequest.indexOf(user.id), 1);
      me.friends.push(user.id);
      me.save();

      user.friends.push(req.userId);
      await user.save();

      return res.json(me);
    } catch (err) {
      return next(err);
    }
  },
};
