const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../config/auth');
const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const User = mongoose.model('User');

module.exports = (io) => {
  io.use(async (socket, next) => {
    const { token } = socket.client.request.cookies;
    if (!token) {
      return next(new Error('Unauthorized'));
    }

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      /* eslint-disable */
      socket.client.userId = decoded.id;

      return next();
    } catch (err) {
      return next(err);
    }
  });

  io.on('connection', socket => {
    if (socket.client.userId) {
      Post.watch().on('change', async function(data) {
        if (data.operationType === 'delete') {
          socket.emit('posts.delete', data.documentKey);
          return;
        }

        let type = data.operationType;
        let fullPost = await Post.getFull(data.documentKey);

        if (type === 'update' || type === 'replace') {
          type = 'edit';
        }

        if (String(fullPost.author._id) === socket.client.userId) {
          socket.emit(`posts.${type}`, fullPost);
          return;
        }

        let me = await User.findById(socket.client.userId);
        let isFriend = me.friends.indexOf(fullPost.author._id);

        if (isFriend !== -1) {
          socket.emit(`posts.${type}`, fullPost);
          return;
        }
      });
    }
  });
};
