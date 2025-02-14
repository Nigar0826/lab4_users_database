const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST API to insert user into the database
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.validate();
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Export the router for use in index.js
module.exports = router;
