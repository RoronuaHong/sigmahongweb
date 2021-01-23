const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chromeSchema = new Schema({
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

const ChromeExtensions = mongoose.model('Chrome', chromeSchema)

module.exports = ChromeExtensions
