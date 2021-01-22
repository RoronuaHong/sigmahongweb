const mongoose = require('mongoose')

const Schema = mongoose.Schema

const datastructureSchema = new Schema({
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

const DataStructure = mongoose.model('Datastructure', datastructureSchema)

module.exports = DataStructure
