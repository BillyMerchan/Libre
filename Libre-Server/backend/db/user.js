const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email address is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'user name is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function() {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
