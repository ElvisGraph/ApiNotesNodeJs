const bcrypt = require('bcrypt')

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const matchPassword = (password, savedPassword) => {
  try {
    return bcrypt.compareSync(password, savedPassword)
  } catch (e) {
    console.log(e)
  }
}


module.exports = {
  matchPassword,
  encryptPassword
}
