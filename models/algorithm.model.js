const mongoose = require('mongoose')

const Schema = mongoose.Schema

const algorithmSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true
  },
  preview: {
    type: String,
    require: true,
    trim: true,
  },
  value: {
    type: String,
    require: true,
    trim: true
  }
}, {
  timestamps: true
})

const Algorithm = mongoose.model('Algorithm', algorithmSchema)

module.exports = Algorithm
