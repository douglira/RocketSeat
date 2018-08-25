const User = require('../Models/User')
const Category = require('../Models/Category')

const CategoryDAO = require('../Dao/CategoryDAO')

module.exports = {
  async create (req, res, next) {
    try {
      const { category: dataCategory } = req.body

      const category = new Category()
      category.title = dataCategory.title
      category.isRoot = dataCategory.isRoot
      category.layer = dataCategory.layer
      category.description = dataCategory.description
      category.categoryId = dataCategory.categoryId
      category.status = 'active'
      category.createdAt = new Date()
      category.updatedAt = new Date()

      await new CategoryDAO().create(category)

      return res.json()
    } catch (err) {
      return next(err)
    }
  }
}
