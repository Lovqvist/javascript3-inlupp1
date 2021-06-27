const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth')

exports.getOneUser = (req, res) => {
                                                                           
    User.findOne({email: req.params.email})                 
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message || 'Something went wrong when fetching the user'
        }))
} 

exports.getAllUsers = (req, res) => {
                                                                           
    User.find()                 
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message || 'Something went wrong when fetching the user'
        }))
} 


exports.registerUser = (req, res) => {

    User.exists({ email: req.body.email }, (err, result) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(result){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'The emailadress is already exict'
            })
        }

        const salt = bcrypt.genSaltSync(10);

        bcrypt.hash(req.body.password, salt, (err, hash) => {

            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed when encrypting user password'
                })
            }

            const newUser = new User({
                firstName:      req.body.firstName,
                lastName:       req.body.lastName,
                email:          req.body.email,
                passwordHash:   hash
            })

            newUser.save()
            .then(() => {
                res.status(201).json({
                    statusCode: 201,
                    status: true,
                    message: 'User created successfully'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to create user'
                })            
            })
        })
    })
}

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'Incorrect email or password'
                })
            }

        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
            if(err){
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'You made a bad request'
                }) 
            }

            if(result) {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'User logged in',
                    token: auth.generateToken(user)
                })
            } else {
                res.status(401).json({
                    statusCode: 401,
                    status: false,
                    message: 'Incorrect email or password' 
                })
            }
        })    
    })    
}

exports.updateUser = (req, res) => {
    User.exists({email: req.params.email}, (err, result) =>{                                      //KOLLAR OM PRODUKTEN FINNS. RESULT = TRUE/FALSE
        if(err) {                                                                               // Fel som kommer om vi använder för få tecken i id
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(result) {
            User.updateOne({ email: req.params.email }, {
                ...req.body,
                modified: Date.now()
            })
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'User updated successfully'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to updated user'
                })
            })

        } else {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'User does not exist'
            })
        }
    })
}