const { DATABASE } = require('../config')
DATABASE.connect()

module.exports = {
  User: require('./User.Model'),
  Note: require('./Note.Model')
}
