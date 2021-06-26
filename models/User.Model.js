const mongoose = require('mongoose')
const { encryptPassword } = require('../helpers')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  create_at: { type: Date, default: Date.now }
})

UserSchema.path('email').validate(async (value) => {
  const emailCount = await mongoose.models.User.countDocuments({email: value });
  return !emailCount;
}, 'Email already exists');

UserSchema.path('username').validate(async (value) => {
  const usernameCount = await mongoose.models.User.countDocuments({username: value });
  return !usernameCount;
}, 'Username already exists');

UserSchema.pre('save', function (next) {
  if (this.password && this.isModified('password')) {
    this.password = encryptPassword(this.password)
  }

  next()
})

module.exports = mongoose.model('User', UserSchema)
