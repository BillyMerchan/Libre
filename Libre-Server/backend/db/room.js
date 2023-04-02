const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema(
  {
    _id: {
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
