const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    _id: {
      type: String
    },
    max_size: {
      type: Int32
    },
    occupancy: {
      type: Boolean
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('room', postSchema)
