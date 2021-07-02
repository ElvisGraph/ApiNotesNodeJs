require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 4000,
  APPLICATION_NAME: process.env.APPLICATION_NAME || 'NOTES APP',
  MONGO_URL: process.env.MONGO_URL,
  DATABASE: require('./database'),
  JWT_SECRET: process.env.JWT_SECRET

}
