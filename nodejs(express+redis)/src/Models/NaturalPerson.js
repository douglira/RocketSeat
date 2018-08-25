const Person = require('./Person')

module.exports = class NaturalPerson extends Person {
  constructor () {
    super()
    this.birthday = undefined
    this.cpf = undefined
    this.gender = undefined
    this.cel = undefined
  }
}
