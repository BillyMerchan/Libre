const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String
    },
    max_size: {
      type: String
    },
    occupancy: {
      type: Boolean
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('room', roomSchema)
