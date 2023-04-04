const express = require('express')
const Room = require('../db/room')
const router = express.Router()

// output list of all rooms
router.get('/list', async (req, res) => {
  try {
    const rooms = await Room.find()
    res.status(201).json({ data: rooms })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

// output a single room by roomId
router.get('/:roomId', async (req, res) => {
  const room = await Room.findOne({ _id: req.params.roomId })
  if (room) {
    res.json({ data: room })
  }
})

router.post('/add', (req, res, next) => {
  try {
    const room = {
      _id: req.body.id,
      max_size: req.body.max_occupancy,
      occupancy: req.body.max_occupancy
    }
    const newRoom = Room.create(room)

    res.status(201).json(newRoom)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

module.exports = router
