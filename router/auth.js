// src/routes/authRoutes.js
const express = require('express');
const { authController } = require('../controller');
const router = express.Router();

router.post('/register', authController.registerUser);
router.get('/verify', authController.verifyUser);

module.exports = router;


