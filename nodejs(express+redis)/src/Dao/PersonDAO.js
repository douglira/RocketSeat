const ConnectionFactory = require('../Models/Factories/ConnectionFactory')

const Person = require('../Models/Person')

module.exports = class PersonDAO {
  constructor () {
    this.conn = ConnectionFactory.getConnection()

    if (!this.conn || this.conn === undefined) {
      throw new Error('Não foi possível iniciar uma conexão')
    }
  }

  async create (person, trx = undefined) {
    if (trx) {
      return trx
        .insert(
          {
            name: person.name,
            gender: person.gender,
            birthday: person.birthday,
            tel: person.tel,
            cel: person.cel,
            cpf: person.cpf,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: person.userId
          },
          'id'
        )
        .into('people')
    }

    return this.conn
      .insert({
        name: person.name,
        gender: person.gender,
        birthday: person.birthday,
        tel: person.tel,
        cel: person.cel,
        cpf: person.cpf,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: person.userId
      })
      .into('people')
  }
}
