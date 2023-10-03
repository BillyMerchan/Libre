const express = require('express');
const User = require("../models/User");

const router = express.Router();

router.get("/profile", async (req, res) => {
  const user = await User.findOne({ email: req.user.email }); //req.user is the user currently logged in
  return res.json({ status: "ok", name: user.name, email: user.email});
});


module.exports = router;