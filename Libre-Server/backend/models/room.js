const mongoose = require('mongoose')

// Create a general scheme for how room data will be stored
const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true
    },
    max_size: {
      type: String,
      required: true
    },
    occupancy: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('room', roomSchema)
