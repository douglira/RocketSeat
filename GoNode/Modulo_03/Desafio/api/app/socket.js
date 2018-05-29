module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(socket.handshake.headers);
  });
};
