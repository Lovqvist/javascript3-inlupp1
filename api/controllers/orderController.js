const router = require('express').Router();
const orderModel = require('../models/orders/orderModel')
// const auth = require('../authentication/auth');

router.post('/', orderModel.createOrder);

router.get('/:email', orderModel.getOrders)


module.exports = router;