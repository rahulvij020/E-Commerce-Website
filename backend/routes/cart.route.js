const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart.controller');
const { protectRoute } = require('../middleware/auth.middleware');

router.get('/',protectRoute,cartController.getCartProducts);
router.post('/',protectRoute,cartController.addToCart);
router.delete('/',protectRoute,cartController.removeAllFromCart);
router.put('/:id',protectRoute,cartController.updateQuantity);

module.exports = router;