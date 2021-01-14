const mongoose = require('mongoose')

const Schema = mongoose.Schema

const loginSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 6
  }
}, {
  timestamps: true
})

const Login = mongoose.model('login', loginSchema)

module.exports = Login
