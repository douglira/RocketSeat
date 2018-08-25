const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('handlebars')
const htmlToText = require('html-to-text')

const config = require('../../config/mail')

module.exports = class Mailer {
  constructor () {
    this.transporter = nodemailer.createTransport(config[config.connection])
    this.from = null
    this.to = null
    this.subject = undefined
    this.template = undefined
    this.templatesPath = config.templatesPath
  }

  sendMail ({ context, ...options }) {
    let hbsTemplate

    if (this.template) {
      const fileTemplate = fs.readFileSync(
        path.join(this.templatesPath, `${this.template}.hbs`),
        'utf-8'
      )
      hbsTemplate = hbs.compile(fileTemplate)(context)
    }

    const mailHtml = hbsTemplate || options.html

    return this.transporter.sendMail({
      ...options,
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: mailHtml,
      text: htmlToText.fromString(mailHtml).trim()
    })
  }
}
