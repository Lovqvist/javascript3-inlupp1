const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({
   
    email:      { type: String, required: true},
    list:       { type: Array, required: true},
    price:      { type: Number, required: true},

    created:    {type: Date, default: Date.now}
})

module.exports = mongodb.model('Order', orderSchema);