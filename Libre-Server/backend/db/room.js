const mongoose = require('mongoose')

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
