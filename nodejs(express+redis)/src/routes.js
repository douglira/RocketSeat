const express = require('express')
const requireDir = require('require-dir')

const Router = express.Router()

const controllers = requireDir('./Controllers')
const middlewares = requireDir('./Middlewares')

/**
 * Auth
 */
Router.post('/auth/signup', controllers.AuthController.signup)
Router.post('/auth/signin', controllers.AuthController.signin)
Router.post('/auth/forgot_password', controllers.AuthController.forgotPass)
Router.post('/auth/reset_password', controllers.AuthController.resetPass)

Router.use(middlewares.Authorization, middlewares.Role())

Router.get(
  '/admin/users/',
  middlewares.Role('admin'),
  controllers.AdminController.usersAll
)
Router.post(
  '/admin/users/:id/status',
  middlewares.Role('admin'),
  controllers.AdminController.userToggleStatus
)

/**
 * User
 */
Router.get('/users/me', controllers.UserController.me)

/**
 * Category
 */
Router.post(
  '/admin/categories',
  middlewares.Role('admin'),
  controllers.CategoryController.create
)

/**
 * Error
 */
Router.use(middlewares.Error)

module.exports = Router
