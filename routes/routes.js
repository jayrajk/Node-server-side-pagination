const express = require('express');
const config = require('../config/index');
const userRoutes = require('./user.route');

const router = express.Router();

router.use('/users', userRoutes);

module.exports = router;