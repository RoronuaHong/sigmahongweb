const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cppsrySchema = new Schema({
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

const CppSry = mongoose.model('CppSummary', cppsrySchema)

module.exports = CppSry
