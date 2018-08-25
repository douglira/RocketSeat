const Person = require('./Person')

module.exports = class LegalPerson extends Person {
  constructor () {
    super()
    this.corporateName = undefined
    this.stateRegistration = undefined
    this.cnpj = undefined
  }
}
