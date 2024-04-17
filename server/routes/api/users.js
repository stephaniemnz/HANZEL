const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Photo = require('../../models/Photo');
const bcrypt = require('bcryptjs');


// Register
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});


// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(400).json({
                message: 'Invalid email or password'
            });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;