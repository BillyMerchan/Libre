const MongoClient = require('mongodb').MongoClient

const db = require('./db/conn')

module.exports = {
    getCollection: async function (collectionName) {
    const client = await MongoClient.connect(url)
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    
    return collection
    }
} 