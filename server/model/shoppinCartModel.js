const mongoose = require('mongoose')

const shoppingCartSchema = new mongoose.Schema({
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    }],
    total: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema)

module.exports = ShoppingCart