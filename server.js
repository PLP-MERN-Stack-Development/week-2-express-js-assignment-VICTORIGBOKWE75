const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const logger = require('./src/middleware/logger');
const errorHandler = require('./src/middleware/errorHandler');

const productRoutes = require('./src/routes/product.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});
app.use('/api/products', productRoutes);

// Error handler (last middleware)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;




