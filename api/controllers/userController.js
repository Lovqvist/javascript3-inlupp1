const router = require('express').Router();
const userModel = require('../models/users/userModel')

router.get('/:id', userModel.getOneUser)
router.get('/', userModel.getAllUsers)

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);

router.patch('/:email', userModel.updateUser);
router.delete('/:email', userModel.deleteUser)

module.exports = router;