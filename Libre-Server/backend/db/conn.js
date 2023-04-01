const { mongoose } = require("mongoose");
const url = process.env.DATABASE;

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options);
console.log("Db connected");


