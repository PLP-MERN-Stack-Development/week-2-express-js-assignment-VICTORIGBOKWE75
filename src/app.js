const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;
