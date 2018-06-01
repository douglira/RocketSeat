const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../config/auth');
const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const User = mongoose.model('User');

module.exports = (io) => {
  io.use(async (socket, next) => {
    const { token } = socket.request.cookies;
    if (!token) {
      return next(new Error('Unauthorized'));
    }

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      /* eslint-disable */
      socket.userId = decoded.id;

      return next();
    } catch (err) {
      return next(err);
    }
  });

  io.on('connection', socket => {
    if (socket.userId) {
      Post.watch().on('change', async function(data) {
        if (data.operationType === 'delete') {
          socket.emit('posts.delete', data.documentKey);
          return;
        }

        if (
          data.fullDocument.author &&
          data.fullDocument.author === socket.userId &&
          (data.operationType === 'insert' || data.operationType === 'update')
        ) {
          console.log('Cancel realtime event');
          return;
        }

        let me = {};
        let isFriend = null;

        switch (data.operationType) {
          case 'insert':
            me = await User.findById(socket.userId);
            isFriend = me.friends.indexOf(data.fullDocument.author);

            if (isFriend !== -1) {
              let fullPost = await Post.getFull(data.documentKey);
              socket.emit('posts.insert', fullPost);
              return;
            }
            break;
          case 'replace':
            me = await User.findById(socket.userId);
            isFriend = me.friends.indexOf(data.fullDocument.author);

            if (isFriend !== -1) {
              let fullPost = await Post.getFull(data.documentKey);

              socket.emit('posts.replace', fullPost);
              return;
            }
            break;
          default:
            break;
        }
      });
    }
  });
};
