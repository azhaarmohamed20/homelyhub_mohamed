const asyncHandler = require("express-async-handler");
const ShoppingCart = require("../model/shoppinCartModel");

const getShoppingCart = asyncHandler(async (req, res) => {
    try {
        const shoppingCarts = await ShoppingCart.find({});
        res.json(shoppingCarts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const getShoppingCartItem = asyncHandler(async (req, res) => {
    try {
        const shoppingCartItem = await ShoppingCart.findById(req.params.id);
        if (!shoppingCartItem) {
            return res.status(404).json({ message: 'Shopping cart item not found' });
        }
        res.json(shoppingCartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const addShoppingCartItem = asyncHandler(async (req, res) => {
    const { item, total, user } = req.body;
    try {
        const newShoppingCartItem = new ShoppingCart({ items: item, total, user });
        const savedShoppingCartItem = await newShoppingCartItem.save();
        res.status(201).json(savedShoppingCartItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const updateShoppingCartItem = asyncHandler(async (req, res) => {
    const { item, total, user } = req.body;
    try {
        const shoppingCartItem = await ShoppingCart.findById(req.params.id);
        if (!shoppingCartItem) {
            return res.status(404).json({ message: 'Shopping cart item not found' });
        }
        shoppingCartItem.items = item;
        shoppingCartItem.total = total;
        shoppingCartItem.user = user;
        const updatedShoppingCartItem = await shoppingCartItem.save();
        res.json(updatedShoppingCartItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const deleteShoppingCartItem = asyncHandler(async (req, res) => {
    try {
        const shoppingCartItem = await ShoppingCart.findById(req.params.id);
        if (!shoppingCartItem) {
            return res.status(404).json({ message: 'Shopping cart item not found' });
        }
        await ShoppingCart.deleteOne({ _id: req.params.id });
        res.json({ message: 'Shopping cart item removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    getShoppingCart,
    getShoppingCartItem,
    addShoppingCartItem,
    updateShoppingCartItem,
    deleteShoppingCartItem
}