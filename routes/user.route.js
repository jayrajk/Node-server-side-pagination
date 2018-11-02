const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.route('/:page/:perPage')
// GET /api/users. all the users.
    .get(userController.getAll);

module.exports = router;