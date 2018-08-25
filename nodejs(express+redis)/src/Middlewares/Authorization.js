const User = require('../Models/User')
const Token = require('../Models/Token')

module.exports = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization
    const token = Token.checkScheme(bearer)

    if (!token) {
      return res.status(401).json({ error: 'Não autorizado' })
    }

    const payload = await Token.validate(token)
    const user = new User()

    user.id = payload.id
    user.email = payload.email
    user.role = payload.role

    req.user = user

    return next()
  } catch (err) {
    return next(err)
  }
}
