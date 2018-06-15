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
routes.post('/forgot_pass', controllers.authController.forgotPass);
routes.post('/reset_pass', controllers.authController.resetPass);
routes.use(authMiddleware);

/**
 * User
 */
routes.get('/user/profile', controllers.userController.profile);
routes.put('/user/profile', controllers.userController.updateProfile);
routes.put('/user/password', controllers.userController.updatePassword);

/**
 * Friend
 */
routes.post('/friend/:id/request', controllers.friendController.request);
routes.put('/friend/:id/request/decline', controllers.friendController.decline);
routes.post('/friend/:id', controllers.friendController.add);
routes.delete('/friend/:id', controllers.friendController.remove);

/**
 * Post
 */
routes.post('/posts', controllers.postController.create);
routes.get('/posts', controllers.postController.feed);
routes.put('/posts/:id', controllers.postController.update);
routes.delete('/posts/:id', controllers.postController.destroy);
routes.put('/posts/:id/like', controllers.postController.toggleLike);
routes.get('/posts/notifications', controllers.postController.allNotifications);
routes.get('/posts/:id', controllers.postController.search);
routes.get('/posts/notifications/:id', controllers.postController.searchNotification);

/**
 * Comment
 */
routes.post('/post/:id/comment', controllers.commentController.create);
routes.get('/post/:id/comments', controllers.commentController.feedByPost);
routes.put('/post/:id/comment', controllers.commentController.update);
routes.delete('/post/:id/comment', controllers.commentController.destroy);
routes.put('/post/comment/:id/like', controllers.commentController.toggleLike);
/**
 * Error
 */
routes.use(errorMiddleware);

module.exports = routes;
