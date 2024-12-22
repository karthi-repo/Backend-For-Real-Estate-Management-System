//      <<-Property API->>

const router = require('express').Router();
const Property = require('../models/propertyModel');  // Adjust the path if necessary

// To get all properties with owner details populated
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().populate('owner_id');
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// To get property by id with owner details populated
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findById(id).populate('owner_id');
        if (!property) {
            return res.status(404).json({ message: `Cannot find property with id ${id}` });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// To create a new property
router.post('/', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(200).json(property);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// To update property
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!property) {
            return res.status(404).json({ message: `Cannot find property with id ${id}` });
        }
        res.status(200).json(property);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// To delete property
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findByIdAndDelete(id);
        if (!property) {
            return res.status(404).json({ message: `Cannot find property with id ${id}` });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
