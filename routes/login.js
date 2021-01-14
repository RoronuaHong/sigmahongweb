const router = require('express').Router()
let Login = require('../models/login.model')

router.route('/').get((req, res) => {
  Login.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {

  const username = req.body.username
  const password = req.body.password
  const newLogin = new Login({ username, password })

  newLogin.save()
    .then(() => res.json('Login user added!'))
    .catch(err => res.status(400).json('Error' + err))
})

module.exports = router
