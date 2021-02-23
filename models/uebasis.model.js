const mongoose = require('mongoose')

const Schema = mongoose.Schema

const uebasisSchema = new Schema({
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
  },
  top: {
    type: Boolean,
    require: true
  }
}, {
  timestamps: true
})

const UEBasis = mongoose.model('UEBasis', uebasisSchema)

module.exports = UEBasis
