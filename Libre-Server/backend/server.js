const express = require('express')
const mongoose = require("mongoose");
const app = express()
const cors = require('cors')
const allRoutes = require('./routes/index.js');
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT

app.use(cors({ credentials: true, origin: true }))
app.use(express.json())
// get database connection
//require('./models/conn')
app.use('/api', allRoutes)

mongoose
  .connect("mongodb://127.0.0.1:27017/Libre-server", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const server = app.listen(3001, () => console.log("Server started on port 3001"))
