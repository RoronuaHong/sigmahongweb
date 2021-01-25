const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
  data: {
    type: Array,
    require: true,
    trim: true
  },
}, {
  timestamps: true
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music
