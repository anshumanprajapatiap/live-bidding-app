const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const bidRoutes = require('./routes/bidRoutes');
require('dotenv').config();
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/bids', bidRoutes);

module.exports = app;
