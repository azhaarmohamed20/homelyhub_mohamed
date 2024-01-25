const express = require('express')
const router = express.Router()
const { getShoppingCart, addShoppingCartItem, updateShoppingCartItem, deleteShoppingCartItem } = require('../controllers/shoppingCartController')

router.route('/').get(getShoppingCart)
// Routes unten müssen geschützt werden
router.route('/').post(addShoppingCartItem)
router.route('/:id').put(updateShoppingCartItem)
router.route('/:id').delete(deleteShoppingCartItem)

module.exports = router