const router = require('express').Router();
const userModel = require('../models/users/userModel')

router.get('/:email', userModel.getOneUser)
router.get('/', userModel.getAllUsers)

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);

router.patch('/:email', userModel.updateUser);

module.exports = router;