const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../config/auth');
const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const User = mongoose.model('User');

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
        const isFriend = me.friends.indexOf(fullPost.author._id);

        if (isFriend !== -1) {
          socket.emit(`posts.${type}`, fullPost);
        }
      });
    }
  });
};
