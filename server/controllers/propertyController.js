const asyncHandler = require("express-async-handler");
const Property = require("../model/propertyModel");



const fetchProperty = asyncHandler(async (req, res) => {
    try {
        const properties = await Property.find({});
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

const fetchPropertyById = asyncHandler(async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const addProperty = asyncHandler(async (req, res) => {
    const { name, description, price, location, image } = req.body;
    try {
        const property = new Property({ name, description, price, location, image });
        const newProperty = await property.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const updateProperty = asyncHandler(async (req, res) => {
    const { name, description, price, location, image } = req.body;
    try {
        let property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        property.name = name;
        property.description = description;
        property.price = price;
        property.location = location;
        property.image = image;
        const updatedProperty = await property.save();
        res.json(updatedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const deleteProperty = asyncHandler(async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        await Property.deleteOne({ _id: req.params.id });
        res.json({ message: 'Property removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = { 
    fetchProperty , 
    fetchPropertyById,
    addProperty,
    updateProperty,
    deleteProperty
}