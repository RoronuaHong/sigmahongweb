const router = require('express').Router()
let UEBasis = require('../models/uebasis.model')

router.route('/').get((req, res) => {
  UEBasis.find()
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

  const newUEBasis = new UEBasis({ title, value, preview })

  newUEBasis.save()
    .then(() => res.status(200).json({
      msg: 'basiseditor save success',
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
    UEBasis.findOne({ id }, (err, data) => {
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
        msg: 'ue basis content get success',
        status: 1,
        data
      })
    })
  } else {
    UEBasis.find()
      .then(data => res.json({
        msg: 'ue basis list get success',
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

  UEBasis.updateOne(conditions, req.body)
    .then(() => res.status(200).json({
      msg: 'ue basis update success',
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

  UEBasis.deleteOne(conditions)
    .then(delRes => {
      return res.status(200).json({
        msg: 'ue basis delete success',
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

  UEBasis.findOne({ _id }, (err, data) => {
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
      msg: 'ue basis content get success',
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

  UEBasis.remove(conditions)
    .then(delRes => {
      return res.status(200).json({
        msg: 'ue basis deletemany success',
        status: 1
      })
    }
   ).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
