const router = require('express').Router()
let Music = require('../models/music.model')

router.route('/').get((req, res) => {
  Music.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Add
 */
router.route('/add').post((req, res) => {
  const data = req.body.data

  const newMusic = new Music({ data })

  newMusic.save()
    .then(() => res.status(200).json({
      msg: 'musicList save success',
      status: 1,
      data
    }))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Content
 */
router.route('/content').post((req, res) => {
  const _id = { _id: req.body.id }

  Music.findOne(_id, (err, data) => {
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
      msg: 'music content get success',
      status: 1,
      data
    })
  })
})

/**
 * Update
 */
router.route('/update').post((req, res) => {
  const conditions = { _id: req.body.id }
  req.body.data = JSON.parse(req.body.data)

  Music.updateOne(conditions, req.body)
    .then(() => res.status(200).json({
      msg: 'music update success',
      status: 1,
      data: req.body.data
    }))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Delete
 */
router.route('/delete').post((req, res) => {
  const conditions = { _id: req.body.id }

  Music.deleteOne(conditions)
    .then(delRes => {
      return res.status(200).json({
        msg: 'music delete success',
        status: 1
      })
    }
   ).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
