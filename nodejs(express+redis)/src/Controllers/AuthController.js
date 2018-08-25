const moment = require('moment')

const User = require('../Models/User')
const NaturalPerson = require('../Models/NaturalPerson')
const LegalPerson = require('../Models/LegalPerson')
// const Address = require('../Models/Address')
const Token = require('../Models/Token')

const UserDAO = require('../Dao/UserDAO')

const { MessageQueue } = require('../Services/MessageQueue')

module.exports = {
  async signup (req, res, next) {
    try {
      const data = req.body

      if (!data.user.email || !data.user.password) {
        return res.status(400).json({ error: 'Campos inválidos' })
      }

      if (data.user.person.cpf) {
        const person = new NaturalPerson()
        const user = new User()

        person.name = data.user.person.name
        person.gender = data.user.person.gender
        person.birthday = moment(
          data.user.person.birthday,
          'DD/MM/YYYY'
        ).toDate()
        person.cpf = data.user.person.cpf
        person.tel = data.user.person.tel
        person.cel = data.user.person.cel

        user.email = data.user.email
        user.password = data.user.password
        user.role = 'user'

        user.person = person

        user.setDisplayName()
        await user.hashPassword(user.password)
        await new UserDAO().createNaturalPerson(user)
      } else {
        const person = new LegalPerson()
        const user = new User()

        person.name = data.user.person.name
        person.corporateName = data.user.person.corporateName
        person.cnpj = data.user.person.cnpj
        person.stateRegistration = data.user.person.stateRegistration
        person.tel = data.user.person.tel

        user.email = data.user.email
        user.password = data.user.password
        user.role = 'user'

        user.person = person
        user.setDisplayName()
        await user.hashPassword(user.password)
        await new UserDAO().createLegalPerson(user)
      }

      return res.status(201).json()
    } catch (err) {
      return next(err)
    }
  },

  async signin (req, res, next) {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        return res.status(400).send({ error: 'Campos inválidos' })
      }

      const userData = new User()
      userData.email = email
      userData.password = password
      const user = await new UserDAO().checkIfExists(userData)

      if (!user) {
        return res.status(400).send({ error: 'Email ou senha inválidos' })
      }

      if (user.status !== 'active') {
        return res.status(401).send({ error: 'Conta desativada' })
      }

      if (!(await user.verifyPassword(userData.password))) {
        return res.status(400).send({ error: 'Email ou senha inválidos' })
      }

      const token = await Token.generate(user)

      delete user.password

      return res.json({ token, user })
    } catch (err) {
      return next(err)
    }
  },

  async forgotPass (req, res, next) {
    try {
      const { email, formPathname } = req.body
      const originPath = req.get('origin')

      if (!email) {
        return res.status(400).send({ error: 'Campo inválido' })
      }

      const userData = new User()
      userData.email = email
      const user = await new UserDAO().checkIfExists(userData)

      if (!user) {
        return res.status(400).send({ error: 'Campo inválido' })
      }

      user.resetPassword()
      await new UserDAO().resetPassword(user)

      const mq = new MessageQueue()
      mq.sendMailForgotPass({
        from: 'SmartSearch <noreply@smartsearch.com>',
        to: user.email,
        subject: 'SmartSearch - Redefinição de senha',
        template: 'forgotPass',
        context: {
          displayName: user.displayName,
          url: `${originPath}${formPathname}?t=${user.passwordResetToken}`
        }
      })

      return res.json({
        message:
          'Solicitação efetuada com sucesso. Em breve receberá um email para redefinição de senha'
      })
    } catch (err) {
      return next(err)
    }
  },

  async resetPass (req, res, next) {
    try {
      const { token, password, confirmPassword } = req.body

      if (!token) {
        return res
          .status(400)
          .json({ error: 'Token não fornecido. Verifique seu email' })
      }

      if (!password || !confirmPassword) {
        return res.status(400).json({ error: 'Campos inválidos' })
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Senhas não coincidem' })
      }

      let user = new User()
      user.passwordResetToken = token
      user = await new UserDAO().findByPasswordToken(user)

      if (!user) {
        return res.status(400).json({ error: 'Token inválido' })
      }

      if (!user.isExpiredResetPassword()) {
        return res.status(400).json({
          error: 'Redefinição de senha expirada. Por favor, solicite novamente'
        })
      }

      await user.hashPassword(password)
      await new UserDAO().updateResetPassword(user)

      return res.json({ message: 'Senha redefinida com sucesso' })
    } catch (err) {
      return next(err)
    }
  }
}
