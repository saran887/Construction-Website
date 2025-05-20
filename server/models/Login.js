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
  }
});

module.exports = mongoose.model('LoginUser', LoginUserSchema, 'login'); // save in 'login' collection
