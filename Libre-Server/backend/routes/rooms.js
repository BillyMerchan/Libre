const express = require('express')
const Room = require('../db/room')
const router = express.Router()

// output list of all rooms
router.get('/list', async (req, res) => {
  try {
    const rooms = await Room.find()
    res.status(200).json({ data: rooms })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

// output a single room by roomNumber
router.get('/:roomNumber', async (req, res) => {
  const room = await Room.findOne({ roomNumber: req.params.roomNumber })
  if (room) {
    res.json({ data: room })
  }
})

// adds one room with parameters roomNumber, max_size, occupancy
// should not need to be used after all rooms have been added
router.post('/add', (req, res, next) => {
  try {
    const room = {
      roomNumber: req.body.roomNumber,
      max_size: req.body.max_size,
      occupancy: req.body.occupancy
    }
    const newRoom = Room.create(room)

    res.status(201).json({ message: 'Room added', data: newRoom })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

// Delete a room by roomNumber
router.delete('/delete/:roomNumber', async (req, res) => {
  try {
    const deletedRoom = await Room.findOneAndDelete({ roomNumber: req.params.roomNumber })

    if (!deletedRoom) {
      return res.status(404).json({ error: 'Room not found' })
    }

    res.status(200).json({ message: 'Room deleted successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

// updates occupancy to either true or false
router.put('/updateOccupancy/:roomNumber', async (req, res) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { roomNumber: req.params.roomNumber },
      { occupancy: req.body.occupancy },
      { new: true }
    )

    if (!updatedRoom) {
      return res.status(404).json({ error: 'Room not found' })
    }

    res.status(200).json({ message: 'Occupancy updated', data: updatedRoom })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

module.exports = router
