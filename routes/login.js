const router = require('express').Router()
let Login = require('../models/login.model')

router.route('/').post((req, res) => {
  const username = req.body.username
  const password = req.body.password

  Login.findOne({ username, password }, (err, data) => {
    if(err) {
      console.log(err)

      return res.status(500).send()
    }

    if(!data) {
      return res.status(200).json({
        msg: 'username or password error',
        status: 0,
        data: {}
      })
    }

    return res.status(200).json({
      msg: 'success',
      status: 1,
      data
    })
  })
})

router.route('/register').post((req, res) => {

  const username = req.body.username
  const password = req.body.password
  const newLogin = new Login({ username, password })

  newLogin.save()
    .then(() => res.json('Login user added!'))
    .catch(err => res.status(400).json('Error' + err))
})

module.exports = router
