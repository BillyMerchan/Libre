const express = require('express')
const recordRoutes = express.Router()
const dbo = require('../db/conn')
const ObjectId = require('mongodb').ObjectId

// Get a list of all the records.
recordRoutes.route('/record').get(function (req, res) {
  const dbConnect = dbo.getDb('Libre')
  dbConnect
    .collection('roomData')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

// This section will help you get a single record by id
recordRoutes.route('/record/:_id').get(function (req, res) {
  const dbConnect = dbo.getDb()
  const myquery = { _id: ObjectId(req.params.id) }
  dbConnect
    .collection('roomData')
    .findOne(myquery, function (err, result) {
      if (err) throw err
      res.json(result)
    })
})
