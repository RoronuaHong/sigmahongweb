const router = require('express').Router()
let CppSry = require('../models/cppsummary.model')

router.route('/').get((req, res) => {
  CppSry.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('./add').post((req, res) => {
  const username = req.body.username
  const newUser = new CppSry({ username })

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error' + err))
})

module.exports = router
