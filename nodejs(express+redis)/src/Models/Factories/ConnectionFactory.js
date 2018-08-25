const config = require('../../../config/database')

class ConnectionFactory {
  static getConnection () {
    return require('knex')({
      client: config.client,
      connection: config[config.client],
      pool: { min: 2, max: 10 }
    })
  }
}

module.exports = ConnectionFactory
