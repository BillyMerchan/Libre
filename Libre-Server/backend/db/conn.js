const { mongoose } = require('mongoose')
const url = process.env.DATABASE

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(url, options)
console.log('Db connected')
