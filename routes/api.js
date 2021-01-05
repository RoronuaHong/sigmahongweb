  
const express = require('express');

const router = express.Router();

const webModel = require('../models/webModel');

// Routes
router.get('/', (req, res) => {
    webModel.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

module.exports = router;