const express = require('express');
const roomsRoutes = require('./rooms.js');
const userRoutes = require('./user.js');

const router = express.Router();

router.use('/rooms', roomsRoutes);
router.use('/user', userRoutes);

module.exports = router;