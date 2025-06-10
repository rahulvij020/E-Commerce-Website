const express = require('express');
const router = express.Router();

const {protectRoute,adminRoute} = require('../middleware/auth.middleware');
const productController = require('../controllers/product.controller');


router.get('/',protectRoute,adminRoute, productController.getAllProducts);
router.get('/featured',productController.getFeaturedProducts);
router.get('/category/:category',productController.getProductsByCategory);
router.post('/',protectRoute,adminRoute,productController.createProduct);
router.patch('/:id',protectRoute,adminRoute,productController.toggleFeaturedProduct);
router.delete('/:id',protectRoute,adminRoute,productController.deleteProduct);

module.exports = router;