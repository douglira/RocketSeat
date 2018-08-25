const Address = require('./Address')

module.exports = class Person {
  constructor () {
    this.id = undefined
    this.name = undefined
    this.tel = undefined
    this.createdAt = undefined
    this.updatedAt = undefined
    this.address = new Address()
  }
}
