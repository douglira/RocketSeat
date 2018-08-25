const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const {
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
} = dotenv.parse(fs.readFileSync('.env'))

module.exports = {
  development: {
    client: DB_CONNECTION,
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE
    },
    pool: { min: 2, max: 10 },
    migrations: {
      tableName: 'tcc_migrations',
      directory: path.join('database', 'migrations')
    }
  }
}
