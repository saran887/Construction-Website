// server/routes/user.js
const express = require('express');
const User = require('../models/User'); // Ensure this path is correct
const router = express.Router();

router.post('/contact', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;