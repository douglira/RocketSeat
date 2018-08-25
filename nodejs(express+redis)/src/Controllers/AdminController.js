const Pagination = require('../Models/Utils/Pagination')

const User = require('../Models/User')

const UserDAO = require('../Dao/UserDAO')

module.exports = {
  async usersAll (req, res, next) {
    try {
      const { page = 1, perPage = 20 } = req.query

      let paginatedUsers = new Pagination()
      paginatedUsers = await new UserDAO().simpleReport(page, perPage)

      return res.json(paginatedUsers)
    } catch (err) {
      return next(err)
    }
  },

  async userToggleStatus (req, res, next) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({ error: 'Parâmetros ínválidos' })
      }

      const user = new User()
      user.id = id
      await new UserDAO().toggleStatus(user, req.user)

      return res.status(204).json()
    } catch (err) {
      return next(err)
    }
  }
}
