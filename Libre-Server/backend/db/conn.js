const { MongoClient } = require("mongodb");
const database = process.env.DATABASE;

const client = new MongoClient(database);

// const client = new MongoClient(database, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
var _database;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, database) {
    // Verify we got a good "db" object
    if (database)
    {
      _database = database.db("Libre");
      console.log("Successfully connected to MongoDB."); 

      listDatabases(client);
    }
    return callback(err);
    });
  },
 
  getDb: function () {
    return _database;
  },
};


async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(`   ${db.name}`));
  
};
