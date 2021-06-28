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

exports.updateOrder = (req, res) => {
    Order.exists({_id: req.params.id}, (err, result) =>{                                      //KOLLAR OM PRODUKTEN FINNS. RESULT = TRUE/FALSE
        if(err) {                                                                               // Fel som kommer om vi använder för få tecken i id
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(result) {
            Order.updateOne({ _id: req.params.id }, {
                ...req.body,
                modified: Date.now()
            })
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Order updated successfully'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to updated order'
                })
            })

        } else {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Order does not exist'
            })
        }
    })
}