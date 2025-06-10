const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth.controller');
const {protectRoute} = require('../middleware/auth.middleware');

router.post("/signup",authController.signup);
router.post("/login",authController.login);
router.post("/logout",authController.logout);
router.post("/refresh-token",authController.refreshToken);
router.get("/profile", protectRoute ,authController.getProfile);

module.exports = router;