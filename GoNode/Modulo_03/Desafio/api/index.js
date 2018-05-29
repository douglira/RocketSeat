require('dotenv').config();

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const dbConfig = require('./config/database');

const port = process.env.NODE_PORT || 3000;

mongoose.connect(dbConfig.url);
requireDir(dbConfig.modelsPath);

app.use(cors());
app.use(bodyParser.json());

app.use('/api', require('./app/routes'));

server.listen(port, () => console.log(`Server running at port ${port}`));

require('./app/socket')(io);
