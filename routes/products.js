const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.storeProduct);
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct);

module.exports = router;