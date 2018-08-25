const ConnectionFactory = require('../Models/Factories/ConnectionFactory')

const Pagination = require('../Models/Utils/Pagination')

const User = require('../Models/User')
const Person = require('../Models/Person')

class UserDAO {
  constructor () {
    this.conn = ConnectionFactory.getConnection()

    if (!this.conn || this.conn === undefined) {
      throw new Error('Não foi possível iniciar uma conexão')
    }
  }

  async createNaturalPerson (user) {
    await this.conn.transaction(async trx => {
      const [userId] = await trx
        .insert(
          {
            displayName: user.displayName,
            email: user.email,
            password: user.password,
            role: user.role,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          'id'
        )
        .into('users')
    })
  }

  async createLegalPerson (user) {
    await this.conn.transaction(async trx => {
      const [userId] = await trx
        .insert(
          {
            displayName: user.displayName,
            email: user.email,
            password: user.password,
            role: user.role,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          'id'
        )
        .into('users')

      await trx
        .insert(
          {
            name: user.person.name,
            corporateName: user.person.corporateName,
            cnpj: user.person.cnpj,
            stateRegistration: user.person.stateRegistration,
            tel: user.person.tel,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId
          },
          'id'
        )
        .into('people')
    })
  }

  async checkIfExists (user) {
    const result = await this.conn
      .select('*')
      .from('users')
      .where('email', user.email)
      .first()

    if (!result) {
      return undefined
    }

    const userData = new User()
    userData.id = result.id
    userData.avatar = result.avatar
    userData.displayName = result.displayName
    userData.email = result.email
    userData.password = result.password
    userData.role = result.role
    userData.createdAt = result.createdAt
    userData.updatedAt = result.updatedAt
    userData.status = result.status
    userData.lastActive = result.lastActive
    userData.lastInactive = result.lastInactive
    userData.statusChangedBy = result.statusChangedBy

    return userData
  }

  async resetPassword (user) {
    await this.conn('users')
      .where('id', user.id)
      .update({
        passwordResetToken: user.passwordResetToken,
        passwordExpiresIn: user.passwordExpiresIn
      })
  }

  async findByPasswordToken (user) {
    const result = await this.conn
      .select(['id', 'email', 'passwordResetToken', 'passwordExpiresIn'])
      .from('users')
      .where('passwordResetToken', user.passwordResetToken)
      .first()

    if (!result) {
      return undefined
    }

    const userData = new User()
    userData.id = result.id
    userData.email = result.email
    userData.passwordResetToken = result.passwordResetToken
    userData.passwordExpiresIn = result.passwordExpiresIn

    return userData
  }

  async updateResetPassword (user) {
    return this.conn('users')
      .where('id', user.id)
      .update({
        password: user.password,
        passwordResetToken: null,
        passwordExpiresIn: null
      })
  }

  async simpleReport (page, perPage) {
    const offset = (page - 1) * perPage

    const [result, countResult] = await Promise.all([
      this.conn.raw(
        `SELECT * FROM user_report_paginate OFFSET ${offset} LIMIT ${perPage}`
      ),
      this.conn.raw('SELECT COUNT(*) FROM user_report_paginate')
      // this.conn('users')
      //   .select(
      //     'users.id as user_id',
      //     'users.avatar as user_avatar',
      //     'users.email as user_email',
      //     'users.displayName as user_displayName',
      //     'users.status as user_status',
      //     'users.createdAt as users_createdAt',
      //     'people.id as people_id',
      //     'people.name as people_name'
      //   )
      //   .innerJoin('people', 'users.id', 'people.userId')
      //   .orderBy('people_name', 'asc')
      //   .where('users.role', 'user')
      //   .offset(offset)
      //   .limit(perPage),
      // this.conn
      //   .count('*')
      //   .from('users')
      //   .innerJoin('people', 'users.id', 'people.userId')
      //   .where('users.role', 'user')
      //   .first()
    ])

    const { count: total } = countResult.rows[0]

    const users = result.rows.map(row => {
      const user = new User()
      const person = new Person()

      user.id = row.user_id
      user.avatar = row.user_avatar
      user.email = row.user_email
      user.displayName = row.user_displayName
      user.status = row.user_status
      user.createdAt = row.users_createdAt

      person.id = row.people_id
      person.name = row.people_name

      user.person = person

      return user
    })

    return Pagination.template(page, perPage, total, users)
  }

  async toggleStatus (user, changedBy) {
    const result = await this.conn('users')
      .select('status')
      .where('id', user.id)
      .first()

    if (!result) {
      throw new Error('Usuário não existe')
    }

    if (result.status === 'active') {
      await this.conn('users')
        .where('id', user.id)
        .update({
          updatedAt: new Date(),
          status: 'inactive',
          lastActive: new Date(),
          statusChangedBy: changedBy.id
        })
    } else {
      await this.conn('users')
        .where('id', user.id)
        .update({
          updatedAt: new Date(),
          status: 'active',
          lastInactive: new Date(),
          statusChangedBy: changedBy.id
        })
    }
  }
}

module.exports = UserDAO
