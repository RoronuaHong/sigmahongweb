const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const WebModelSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const WebModel = mongoose.model('WebModel', WebModelSchema);

module.exports =  WebModel;
