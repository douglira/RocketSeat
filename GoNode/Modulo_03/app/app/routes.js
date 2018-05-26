const express = require('express');
const requireDir = require('require-dir');

const router = express.Router();

const authMiddleware = require('./middlewares/auth');

const controllers = requireDir('./controllers');

/**
 * Auth
 */
router.post('/signup', controllers.authController.signup);
router.post('/signin', controllers.authController.signin);
router.use(authMiddleware);

/**
 * User
 */
router.put('/users', controllers.userController.update);
router.get('/users/me', controllers.userController.me);

/**
 * Follows
 */
router.post('/follow/:id', controllers.followController.create);
router.delete('/unfollow/:id', controllers.followController.destroy);

/**
 * Tweets
 */
router.post('/tweets', controllers.tweetController.create);
router.get('/tweets/feed', controllers.tweetController.feed);
router.delete('/tweets/:id', controllers.tweetController.destroy);

/**
 * Likes
 */
router.post('/like/:id', controllers.likeController.toggle);

module.exports = router;
