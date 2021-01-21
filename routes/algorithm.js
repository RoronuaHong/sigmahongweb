const router = require('express').Router()
let Algorithm = require('../models/algorithm.model')

router.route('/').get((req, res) => {
  Algorithm.find()
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

  const newAlgorithm = new Algorithm({ title, value, preview })

  newAlgorithm.save()
    .then(() => res.status(200).json({
      msg: 'algorithmeditor save success',
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

  if(id) {
    Algorithm.findOne({ id }, (err, data) => {
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
        msg: 'algorithm content get success',
        status: 1,
        data
      })
    })
  } else {
    Algorithm.find()
      .then(data => res.json({
        msg: 'algorithm list get success',
        status: 1,
        data
      }))
      .catch(err => res.status(400).json('Error: ' + err))
  }
})

/**
 * Update
 */
router.route('/update').post((req, res) => {
  const conditions = { _id: req.body.id }
  const title = req.body.title
  const value = req.body.value
  const preview = req.body.preview

  Algorithm.updateOne(conditions, req.body)
    .then(() => res.status(200).json({
      msg: 'algorithmeditor update success',
      status: 1,
      data: { title, value, preview }
    }))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Delete
 */
router.route('/delete').post((req, res) => {
  const conditions = { _id: req.body.id }

  Algorithm.deleteOne(conditions)
    .then(delRes => {
      return res.status(200).json({
        msg: 'algorithmeditor delete success',
        status: 1
      })
    }
   ).catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Content
 */
router.route('/content').post((req, res) => {
  const _id = req.body.id

  Algorithm.findOne({ _id }, (err, data) => {
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
      msg: 'algorithm content get success',
      status: 1,
      data
    })
  })
})

/**
 * DeleteMany
 */
router.route('/deletemany').post((req, res) => {
  const conditions = { _id: { $in: JSON.parse(req.body.ids) }}

  Algorithm.remove(conditions)
    .then(delRes => {
      return res.status(200).json({
        msg: 'algorithmeditor deletemany success',
        status: 1
      })
    }
   ).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
