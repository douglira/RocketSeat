const _ = require('lodash');
const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const User = mongoose.model('User');

module.exports = {
  async create(req, res, next) {
    try {
      const post = await Post.create({ ...req.body, author: req.userId });
      const user = await User.findById(req.userId);

      user.posts.push(post.id);
      await user.save();

      return res.json(post);
    } catch (err) {
      return next();
    }
  },

  async feed(req, res, next) {
    try {
      const userPosts = await User.getFeedPosts(req.userId);

      const allFriendsPosts = [];

      userPosts.friends.forEach(friendPosts =>
        friendPosts.posts.forEach(post => allFriendsPosts.push(post)));

      const posts = _.orderBy([...userPosts.posts, ...allFriendsPosts], 'createdAt', 'desc');

      return res.json(posts);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true },
      ).where({ author: req.userId });

      return res.json(post);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      if (!(await Post.findByIdAndRemove(req.params.id))) {
        return res.status(400).json({ error: "Post doesn't exist" });
      }

      const user = await User.findById(req.userId);
      user.posts.splice(user.posts.indexOf(req.params.id), 1);
      await user.save();

      return res.json({ message: 'Post deleted successfully' });
    } catch (err) {
      return next(err);
    }
  },
};
