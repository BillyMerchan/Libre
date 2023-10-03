const express = require('express');
const authRoutes = require('./auth.js');
const roomsRoutes = require('./rooms.js');

const router = express.Router();

router.use('/auth',authRoutes);
router.use('/room',roomsRoutes);