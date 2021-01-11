const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cppsrySchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true
})

const CppSry = mongoose.model('CppSummary', cppsrySchema)

module.exports = CppSry
