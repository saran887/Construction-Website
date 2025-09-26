const express = require('express');
const router = express.Router();
const LoginUser = require('../models/LoginUser');
const bcrypt = require('bcrypt');

// Signup
router.post('/signup', async (req, res) => {
  const { 
    email, 
    password, 
    firstName, 
    lastName, 
    phone, 
    company, 
    designation, 
    address,
    acceptMarketing
  } = req.body;

  try {
    // Check if user exists
    const existingUser = await LoginUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new LoginUser({ 
      email, 
      password: hashedPassword,
      firstName: firstName || '',
      lastName: lastName || '',
      phone: phone || '',
      company: company || '',
      designation: designation || '',
      address: address || '',
      acceptMarketing: !!acceptMarketing,
      createdAt: new Date()
    });
    
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Signup error:', error);
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

    // Update last login time
    user.lastLogin = new Date();
    await user.save();

    // Return user data (excluding password)
    const userData = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      message: 'Login successful'
    };

    res.status(200).json(userData);

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
