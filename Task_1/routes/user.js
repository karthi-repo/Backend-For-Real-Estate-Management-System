//      <<-User API->>

const router = require('express').Router();
const User = require('../models/userModel'); 


// To get all users
router.get('/', async (req, res) => {
    try {
        const UserBody = await User.find({});
        res.status(200).json(UserBody);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// To get user by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const UserBody = await User.findById(id);
        res.status(200).json(UserBody);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// To create a new user
router.post('/', async (req, res) => {
    try {
        const UserBody = await User.create(req.body);
        res.status(200).json(UserBody);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// To update user
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const UserBody = await User.findByIdAndUpdate(id, req.body);
        if (!UserBody) {
            return res.status(404).json({ message: `Cannot find user with id ${id}` });
        }
        res.status(200).json(UserBody);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// To delete user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const UserBody = await User.findByIdAndDelete(id);
        if (!UserBody) {
            return res.status(404).json({ message: `Cannot find user with id ${id}` });
        }
        res.status(200).json(UserBody);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
