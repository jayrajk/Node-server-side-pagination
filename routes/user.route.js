const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.route('/:page/:perPage')
// GET /api/users. all the users.
    .get(userController.getAll);

/*router.route('/:id')
// GET /api/users/:userId. all the users.
    .get(validate(paramValidation.getUser),userController.getById)
    .put(validate(paramValidation.updateUser), userController.update)
    .delete(validate(paramValidation.getUser), userController.deleteUser);*/

module.exports = router;