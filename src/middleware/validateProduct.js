// src/middleware/validateProduct.js

module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Product name is required and must be a string' });
  }

  if (!description || typeof description !== 'string') {
    return res.status(400).json({ error: 'Description is required and must be a string' });
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }

  if (!category || typeof category !== 'string') {
    return res.status(400).json({ error: 'Category is required and must be a string' });
  }

  if (typeof inStock !== 'boolean') {
    return res.status(400).json({ error: 'inStock must be a boolean value' });
  }

  next(); // Move to the next middleware or route handler
};

