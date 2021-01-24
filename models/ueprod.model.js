const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ueprodSchema = new Schema({
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

const UEProd = mongoose.model('UEProd', ueprodSchema)

module.exports = UEProd
