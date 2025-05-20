const express = require('express');
const router = express.Router();
const LoginUser = require('../models/LoginUser');
const bcrypt = require('bcrypt');

// Signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await LoginUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new LoginUser({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await LoginUser.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
