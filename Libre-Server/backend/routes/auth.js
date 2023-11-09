const express = require('express');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const User = require('../models/User.js');

const router = express.Router()

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email
  })

  if (!user) {
    return res.status(401).json({ error: 'Invalid Email' })
  }

  const isPasswordValid = await bcryptjs.compare(
    req.body.password,
    user.password
  )

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email
      },
      'SecretCode'
    )
    return res
      .cookie('access_token', token, {
        httpOnly: true
      })
      .status(200)
      .json({ message: 'Login success' })
  } else {
    return res.status(401).json({ error: 'Invalid Password' })
  }
})

router.post("/register", async (req, res) => {
  try {
    const newPassword = await bcryptjs.hash(req.body.password, 10)
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword
    })
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: 'Duplicate email' })
  }
})

// Logout Endpoint
router.get('/logout', async (req, res) => {
  res.clearCookie('access_token')
  return res.status(200).json({ message: 'logout success' })
})

module.exports = router;
