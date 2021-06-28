const router = require('express').Router();
const orderModel = require('../models/orders/orderModel')
// const auth = require('../authentication/auth');

router.post('/new', orderModel.createOrder);

router.get('/:email', orderModel.getOrder)
router.get('/', orderModel.getAllOrders)

router.patch('/:id', orderModel.updateOrder)


module.exports = router;