const File = require('./File')

module.exports = class Image extends File {
  constructor (url = null) {
    super()
    this.url = undefined
  }
}
