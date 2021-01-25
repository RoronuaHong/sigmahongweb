const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
  content: {
    type: String,
    require: true,
    trim: true
  },
  url: {
    type: String,
    require: true,
    trim: true,
  }
}, {
  timestamps: true
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music
