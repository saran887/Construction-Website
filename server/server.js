// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with failure
  });

// Import user routes
const userRoutes = require('./routes/user');
app.use('/api', userRoutes); // Use user routes for API

// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});