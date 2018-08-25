const kue = require('kue')
const config = require('../../config/redis')

class MessageQueue {
  constructor () {
    this.kue = kue
    this.queue = this.kue.createQueue(config)
  }

  sendMailForgotPass (data) {
    return this.queue
      .create('mailer:forgotPass', data)
      .attempts(3)
      .removeOnComplete(true)
      .save()
  }
}

module.exports.MessageQueue = MessageQueue
