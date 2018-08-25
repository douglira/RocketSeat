const ConnectionFactory = require('../Models/Factories/ConnectionFactory')

module.exports = class UserReportDAO {
  constructor () {
    this.conn = ConnectionFactory.getConnection()

    if (!this.conn || this.conn === undefined) {
      throw new Error('Não foi possível iniciar uma conexão')
    }
  }

  async simplePagination () {}
}
