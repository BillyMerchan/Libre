const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./db/User');

const router = express.Router();

router.post('/signin', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(401).json({ message: 'Password is Incorrect' });
          }

        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;
