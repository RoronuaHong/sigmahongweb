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
  const preview = req.body.preview

  const newCppSry = new CppSry({ title, value, preview })

  newCppSry.save()
    .then(() => res.status(200).json({
      msg: 'cppsummaryeditor save success',
      status: 1,
      data: { title, value, preview }
    }))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Get
 */
router.route('/get').get((req, res) => {
  const id = req.body.id

  console.log(req)
  console.log(id)

  if(id) {
    CppSry.findOne({ id }, (err, data) => {
      if(err) {
        console.log(err)
  
        return res.status(500).send()
      }
  
      if(!data) {
        return res.status(200).json({
          msg: 'id error',
          status: 0,
          data: {}
        })
      }
  
      return res.status(200).json({
        msg: 'cppsummary content get success',
        status: 1,
        data
      })
    })
  } else {
    CppSry.find()
      .then(data => res.json({
        msg: 'cppsummary list get success',
        status: 1,
        data
      }))
      .catch(err => res.status(400).json('Error: ' + err))
  }
})

router.route('/content').post((req, res) => {
  const _id = req.body.id

  CppSry.findOne({ _id }, (err, data) => {
    if(err) {
      console.log(err)

      return res.status(500).send({
        msg: 'error',
        status: -1,
        data: {}
      })
    }

    if(!data) {
      return res.status(200).json({
        msg: 'id error',
        status: 0,
        data: {}
      })
    }

    return res.status(200).json({
      msg: 'cppsummary content get success',
      status: 1,
      data
    })
  })
})

module.exports = router
