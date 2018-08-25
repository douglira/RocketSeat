const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const Person = require('./Person')

module.exports = class User {
  constructor (email = undefined, password = undefined) {
    this.id = undefined
    this.avatar = undefined
    this.displayName = undefined
    this.email = email
    this.password = password
    this.passwordResetToken = undefined
    this.passwordExpiresIn = undefined
    this.role = undefined
    this.status = undefined
    this.lastActive = undefined
    this.lastInactive = undefined
    this.statusChangedBy = undefined
    this.createdAt = undefined
    this.updatedAt = undefined
    this.person = new Person()
  }

  setDisplayName () {
    if (!this.person || !this.person.name) {
      throw new Error('You have to set a person name')
    }

    const fullName = this.person.name

    const splittedName = fullName.split(' ')

    let [first] = splittedName.slice(0, 1)
    let [middle] = splittedName.slice(1, 2)
    let [last] = splittedName.slice(-1)

    let displayName

    if (splittedName.length === 1) {
      displayName = fullName
      this.displayName = displayName
      return
    }

    if (splittedName.length === 2) {
      displayName = `${first} ${last}`
      this.displayName = displayName
      return
    }

    if (first.length <= 3) {
      first = `${first} ${middle}`
    }

    displayName = `${first} ${last}`
    this.displayName = displayName
  }

  async hashPassword (password) {
    this.password = await bcrypt.hash(password, 10)
  }

  async verifyPassword (password) {
    return bcrypt.compare(password, this.password)
  }

  resetPassword () {
    this.passwordResetToken = crypto
      .randomBytes(10)
      .toString('hex')
      .toUpperCase()
    const expiresIn = new Date()
    expiresIn.setMinutes(expiresIn.getMinutes() + 10)

    this.passwordExpiresIn = expiresIn
  }

  isExpiredResetPassword () {
    const now = new Date()
    const past = new Date(this.passwordExpiresIn)
    let isValid = false

    if (now > past) {
      return isValid
    }

    isValid = true
    return isValid
  }
}
