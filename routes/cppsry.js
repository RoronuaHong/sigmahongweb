const router = require('express').Router()
let CppSry = require('../models/cppsummary.model')

router.route('/').get((req, res) => {
  CppSry.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Add
 */
router.route('/add').post((req, res) => {
  const title = req.body.title
  const value = req.body.value

  const newCppSry = new CppSry({ title, value })

  newCppSry.save()
    .then(() => res.status(200).json({
      msg: 'cppsummaryeditor save success',
      status: 1,
      data: { value }
    }))
    .catch(err => res.status(400).json('Error' + err))
})

/**
 * Editor
 */

module.exports = router
