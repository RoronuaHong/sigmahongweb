const router = require('express').Router()
let UEProd = require('../models/ueprod.model.js')

router.route('/').get((req, res) => {
  UEProd.find()
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

  const newUEProd = new UEProd({ title, value, preview })

  newUEProd.save()
    .then(() => res.status(200).json({
      msg: 'ueprodeditor save success',
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
    UEProd.findOne({ id }, (err, data) => {
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
        msg: 'ue prod content get success',
        status: 1,
        data
      })
    })
  } else {
    UEProd.find()
      .then(data => res.json({
        msg: 'ue prod list get success',
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

  UEProd.updateOne(conditions, req.body)
    .then(() => res.status(200).json({
      msg: 'ue prod update success',
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

  UEProd.deleteOne(conditions)
    .then(delRes => {
      return res.status(200).json({
        msg: 'ue prod delete success',
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

  UEProd.findOne({ _id }, (err, data) => {
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
      msg: 'ue prod content get success',
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

  UEProd.remove(conditions)
    .then(delRes => {
      return res.status(200).json({
        msg: 'ue prod deletemany success',
        status: 1
      })
    }
   ).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
