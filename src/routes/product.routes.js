const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const validateProduct  = require('../middleware/validateProduct');
const auth = require('../middleware/auth');


router.get('/', productController.getAllProducts);
router.get('/stats', productController.getProductStats);
router.get('/:id', productController.getProductById);
router.post('/', auth, validateProduct, productController.createProduct);
router.put('/:id', auth, validateProduct, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);



module.exports = router;

