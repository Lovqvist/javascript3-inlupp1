const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message || 'Something went wrong when fetching the products'
        }))
       

}

exports.getOneProduct = (req, res) => {                     
    Product.exists({_id: req.params.id}, (err, result) =>{                                      //KOLLAR OM PRODUKTEN FINNS. RESULT = TRUE/FALSE
        if(err) {                                                                               // Fel som kommer om vi använder för få tecken i id
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }
        
        if(result) {                                                                        
            Product.findById(req.params.id)                 
                .then(data => res.status(200).json(data))
                .catch(err => res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: err.message || 'Something went wrong when fetching the products'
                }))
        } else{
                res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'Product does not exist'
                })
        }
    })
}

exports.createProduct = (req, res) => {
    Product.exists({ name: req.body.name}, (err, result) => {
        if(err) {
            return res.status(500).json(err);
        }

        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Bad requst, a product by that name already exists'
            })
        } 

        const newProduct = new Product({
            name:   req.body.name,
            short:  req.body.short,
            desc:   req.body.desc,
            price:  req.body.price,
            image:  req.body.image

        })

        newProduct.save()
            .then(() => {
                res.status(201).json({
                    statusCode: 201,
                    status: true,
                    message: 'Product created successfully'
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to create product'
                })
            })
    })
}

exports.updateProduct = (req, res) => {
    Product.exists({_id: req.params.id}, (err, result) =>{                                      //KOLLAR OM PRODUKTEN FINNS. RESULT = TRUE/FALSE
        if(err) {                                                                               // Fel som kommer om vi använder för få tecken i id
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(result) {
            Product.updateOne({ _id: req.params.id }, {
                ...req.body,
                modified: Date.now()
            })
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Pruduct updated successfully'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to updated product'
                })
            })

        } else {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Product does not exist'
            })
        }
    })
}
    
        
exports.deleteProduct = (req, res) => {
    Product.exists({_id: req.params.id}, (err, result) => {
        if(err) {                                                                               // Fel som kommer om vi använder för få tecken i id
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(result) {
            Product.deleteOne({_id: req.params.id})
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Product deleted',
                    
                })
            })
            .catch((err) => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete product',
                    err
                })
            })
        } else {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Product does not exist'
            })
        }
    })
}