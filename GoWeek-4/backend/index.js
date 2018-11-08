const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  'mongodb://douglira:goweek4douglira@ds155073.mlab.com:55073/goweek-douglira',
  {
    useNewUrlParser: true,
  }
)

app.use((req, res, next) => {
  req.io = io;

  return next();
})

app.use(cors());
app.use(express.json());
app.use('/api', require('./src/routes'));

server.listen(3000, () => console.log("Server started on port 3000"));
