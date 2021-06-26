const mongodb = require('mongoose');
const Order = require('./orderSchema');

exports.getOrder = (req, res) => {
    Order.find({email: req.params.email})
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message || 'Something went wrong when fetching the orders'
        }))
}

exports.getAllOrders = (req, res) => {
                                                                           
    Order.find()                 
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message || 'Something went wrong when fetching the user'
        }))
} 

exports.createOrder = (req, res) => {
        const newOrder = new Order ({
            email: req.body.email,
            list: req.body.list,
            price: req.body.price
        })

        newOrder.save()

        .then(() => {
            res.status(201).json({
                statusCode: 201,
                status:true,
                message: ' Order was created'
            })

        })

        .catch(err => {
            res.status(500).json({
                statusCode:500,
                status: false,
                message: 'Could not create the order'
            })
        })
}