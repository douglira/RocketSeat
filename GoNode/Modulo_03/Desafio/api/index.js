require('dotenv').config();

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const dbConfig = require('./config/database');

const port = process.env.SERVER_PORT || 3000;

mongoose.connect(dbConfig.url);
requireDir(dbConfig.modelsPath);

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api', require('./app/routes'));

server.listen(port, () => console.log(`Server running at port ${port}`));

require('./app/socket')(io);
