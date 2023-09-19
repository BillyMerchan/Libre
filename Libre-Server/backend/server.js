const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT

app.use(cors())
app.use(express.json())
// get database connection
require('./models/conn')
const routes = require('./routes/rooms')

app.use('/room', routes)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
