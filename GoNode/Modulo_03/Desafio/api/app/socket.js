const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../config/auth');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Post = mongoose.model('Post');
const PostNotification = mongoose.model('PostNotification');

module.exports = (io) => {
  io.use(async (socket, next) => {
    const { token } = socket.handshake.query;

    if (!token) {
      return new Error('Not authorized');
    }

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      socket.client.userId = decoded.user._id;

      return next();
    } catch (err) {
      return next(err);
    }
  });

  io.on('connection', (socket) => {
    if (socket.client.userId) {
      Post.watch().on('change', async (data) => {
        if (data.operationType === 'delete') {
          socket.emit('posts.delete', data.documentKey);
          return;
        }

        let type = data.operationType;
        const fullPost = await Post.getFull(data.documentKey);

        if (type === 'update' || type === 'replace') {
          type = 'edit';
        }

        if (String(fullPost.author._id) === socket.client.userId) {
          socket.emit(`posts.${type}`, fullPost);
          return;
        }

        const me = await User.findById(socket.client.userId);

        if (me.isFriend(fullPost.author._id)) {
          socket.emit(`posts.${type}`, fullPost);
        }
      });

      PostNotification.watch().on('change', async (data) => {
        if (data.operationType === 'delete') {
          socket.emit('post.notification.delete', data.documentKey);
          return;
        }

        if (String(data.fullDocument.to) !== socket.client.userId) return;

        if (data.operationType === 'insert') {
          const fullNotification = await PostNotification.findById(data.documentKey).populate('from');

          socket.emit('post.notification.insert', fullNotification);
        }
      });
    }
  });
};
