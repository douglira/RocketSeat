const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = class Token {
  static generate (user) {
    if (!user.id || !user.email || !user.role) {
      throw new Error('Missing user properties')
    }

    return jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.APP_KEY,
      { expiresIn: '1d' }
    )
  }

  static checkScheme (bearer) {
    if (!bearer) {
      return undefined
    }

    const parts = bearer.split(' ')

    if (parts.length !== 2) {
      return undefined
    }

    const [scheme, token] = parts

    if (!/^Bearer$/.test(scheme)) {
      return undefined
    }

    return token
  }

  static validate (token) {
    return promisify(jwt.verify)(token, process.env.APP_KEY)
  }
}
