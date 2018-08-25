const path = require('path')

module.exports = {
  connection: process.env.MAIL_CONNECTION || 'smtp',
  templatesPath: path.join('resources', 'mail'),
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  }
}
