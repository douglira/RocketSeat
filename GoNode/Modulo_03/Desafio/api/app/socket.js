const mongoose = require('mongoose');

const Post = mongoose.model('Post');

module.exports = (io) => {
  io.use((socket, next) => {
    // console.log(socket.client);
    next();
  });

  io.on('connection', (socket) => {
    Post.watch({
      $match: { 'fullDocument.author': '5b0b24a2f5c5aa03481782b5' },
    }).on('change', data => socket.emit(data));
  });
};
