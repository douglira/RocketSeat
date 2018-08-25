require('dotenv').config()

const { MessageQueue } = require('../src/Services/MessageQueue')
const Mailer = require('../src/Services/Mailer')

const jobs = new MessageQueue()

console.log(`Worker.Mail is running - ${new Date().toString()}`)

jobs.queue.process('mailer:forgotPass', 10, async (job, done) => {
  try {
    console.log('Job: ', job.type)
    const { from, to, subject, template, context } = job.data

    const mailer = new Mailer()
    mailer.from = from
    mailer.to = to
    mailer.subject = subject
    mailer.template = template
    await mailer.sendMail({ context })
    done && done()
  } catch (err) {
    console.error(`JOB_ERROR[${job.type}]: `, err)
  }
})
