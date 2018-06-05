const _ = require('lodash');
const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment');
const PostNotification = mongoose.model('PostNotification');

module.exports = {
  async create(req, res, next) {
    try {
      if (!req.body.content.length) {
        return res.status(401).json({ error: 'Empty content' });
      }

      const post = await Post.create({ ...req.body, author: req.userId });
      const user = await User.findById(req.userId);

      user.posts.push(post.id);
      await user.save();

      const fullPost = await Post.getFull(post.id);

      return res.status(201).json(fullPost);
    } catch (err) {
      return next();
    }
  },

  async feed(req, res, next) {
    try {
      const userPosts = await User.getFeedPosts(req.userId);

      const allFriendsPosts = [];

      userPosts.friends.forEach(friend => friend.posts.forEach(post => allFriendsPosts.push(post)));

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
      if (!req.params.id) {
        return res.status(400).json({ error: 'Parameter is missing' });
      }

      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(400).json({ error: "Post doesn't exist" });
      }

      const me = await User.findById(req.userId);

      if (me.posts.indexOf(req.params.id) === -1) {
        return res.status(400).json({ error: 'You can not delete this post' });
      }

      await Promise.all(post.comments.map(commentId => Comment.findByIdAndRemove(commentId)));

      me.posts.splice(me.posts.indexOf(req.params.id), 1);
      await me.save();

      await post.remove();

      return res.json({ message: 'Post deleted successfully' });
    } catch (err) {
      return next(err);
    }
  },

  async toggleLike(req, res, next) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'Parameter is missing' });
      }

      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(400).json({ error: "Post doesn't exist" });
      }

      const like = post.likes.indexOf(req.userId);

      if (like !== -1) {
        post.likes.splice(like, 1);
        await post.save();

        const notification = await PostNotification.findOne({ post: post.id });
        const user = await User.findById(notification.to);

        const index = user.postNotifications.indexOf(notification.id);
        user.postNotifications.splice(index, 1);
        await notification.remove();
        await user.save();

        return res.json();
      }

      post.likes.push(req.userId);
      await post.save();

      const notification = await PostNotification.create({
        post: post.id,
        from: req.userId,
        to: post.author,
        topic: 'like',
      });
      const user = await User.findById(notification.to);
      console.log(user);
      user.postNotifications.push(notification.id);
      await user.save();

      return res.json();
    } catch (err) {
      return next(err);
    }
  },

  async allNotifications(req, res, next) {
    try {
      const user = await User.findById(req.userId)
        .select('postNotifications')
        .populate({
          path: 'postNotifications',
          populate: {
            path: 'from',
            select: ['name', 'avatar_url'],
          },
        });

      return res.json(user.postNotifications);
    } catch (err) {
      return next(err);
    }
  },
};
