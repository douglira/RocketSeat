const ConnectionFactory = require('../Models/Factories/ConnectionFactory')

// const Pagination = require('../Models/Utils/Pagination')

// const Category = require('../Models/Category')

class CategoryDAO {
  constructor () {
    this.conn = ConnectionFactory.getConnection()

    if (!this.conn || this.conn === undefined) {
      throw new Error('Não foi possível iniciar uma conexão')
    }
  }

  async create (category) {
    await this.conn.transaction(async trx => {
      await trx
        .insert({
          title: category.title,
          isRoot: category.isRoot,
          layer: category.layer,
          status: category.status,
          description: category.description,
          createdAt: category.createdAt,
          updatedAt: category.updatedAt,
          categoryId: category.categoryId
        })
        .into('categories')
    })
  }
}

module.exports = CategoryDAO
