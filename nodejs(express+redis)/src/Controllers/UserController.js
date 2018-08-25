const User = require('../Models/User')

const UserDAO = require('../Dao/UserDAO')

module.exports = {
  async me (req, res, next) {
    try {
      let user = new User()

      user.email = req.user.email
      user = await new UserDAO().checkIfExists(user)
      delete user.password

      return res.json({ user })
    } catch (err) {
      return next(err)
    }
  }
}
