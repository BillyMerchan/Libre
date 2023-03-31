const { Mongoose } = require("mongoose");
const url = process.env.DATABASE;

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

Mongoose.connect(url, options, (err) => {
  if (err) {
    console.log("Connection error.");
  } else {
    console.log("Connected to MongoDB.");
  }
});

