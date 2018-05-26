const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const controllers = requireDir('./controllers');

/**
 * Auth
 */
routes.post('/signin', controllers.authController.signin);
routes.post('/signup', controllers.authController.signup);
routes.use(authMiddleware);

module.exports = routes;
