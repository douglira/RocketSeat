const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');
const errorMiddleware = require('./middlewares/error');

const controllers = requireDir('./controllers');

/**
 * Auth
 */
routes.post('/signin', controllers.authController.signin);
routes.post('/signup', controllers.authController.signup);
routes.use(authMiddleware);

/**
 * User
 */
routes.put('/user/profile', controllers.userController.updateProfile);
routes.put('/user/password', controllers.userController.updatePassword);

/**
 * Friend
 */
routes.post('/user/:id/friend/request', controllers.friendController.friendRequest);
routes.post('/user/:id/friend/add', controllers.friendController.add);

/**
 * Post
 */
routes.post('/user/posts', controllers.postController.create);
routes.get('/user/posts', controllers.postController.feed);
routes.put('/user/posts/:id', controllers.postController.update);
routes.delete('/user/posts/:id', controllers.postController.destroy);

/**
 * Error
 */
routes.use(errorMiddleware);

module.exports = routes;
