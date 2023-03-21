const express = require('express')
const Room = require('../modules/room')
const router = express.Router()

// output list of all rooms
router.get('/list', async (req, res) => {
  const rooms = await Room.find()
  res.json({ data: rooms })
})

// output a single room by roomId
router.get('/:roomId', async (req, res) => {
  const room = await Room.findOne({ _id: req.params.roomId })
  if (room) {
    res.json({ data: room })
  }
})

module.exports = router
