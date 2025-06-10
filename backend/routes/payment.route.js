const express = require('express');
const router = express.Router();

const {protectRoute} = require('../middleware/auth.middleware');
const paymentController = require('../controllers/payment.controller');

router.post("/create-checkout-session", protectRoute, paymentController.createCheckoutSession);
router.post("/checkout-success", protectRoute, paymentController.checkoutSuccess);

module.exports = router;