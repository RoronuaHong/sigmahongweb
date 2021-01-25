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
  const content = req.body.content
  const url = req.body.url

  const newMusic = new Music({ content, url })

  newMusic.save()
    .then(() => res.status(200).json({
      msg: 'musiceditor save success',
      status: 1,
      data: { content, url }
    }))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * Get
 */
router.route('/get').get((req, res) => {
  const id = req.body.id

  if(id) {
    Music.findOne({ id }, (err, data) => {
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
        msg: 'music content get success',
        status: 1,
        data
      })
    })
  } else {
    Music.find()
      .then(data => res.json({
        msg: 'music list get success',
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
  const content = req.body.content
  const url = req.body.url

  Music.updateOne(conditions, req.body)
    .then(() => res.status(200).json({
      msg: 'music update success',
      status: 1,
      data: { content, url }
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
