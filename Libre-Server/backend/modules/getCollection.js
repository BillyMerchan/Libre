const MongoClient = require('mongodb').MongoClient

const dbo = require('./db/conn')

module.exports = {
    getCollection: async function (collectionName) {
        let db_connect = dbo.getDb("Libre");
        db_connect
          .collection("roomData")
          .find({})
          .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    return db_connect.collection
    }
} 