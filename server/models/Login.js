const mongoose = require('mongoose');

const LoginUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Prevent duplicate signups
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  designation: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  acceptMarketing: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  }
});

module.exports = mongoose.model('LoginUser', LoginUserSchema, 'login'); // save in 'login' collection
