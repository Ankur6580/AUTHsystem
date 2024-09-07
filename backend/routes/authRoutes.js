const express = require('express');
const router = express.Router();
const { registerUser, loginUser, resetPassword, requestPasswordReset } = require('../controllers/authController');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/reset-password-request', requestPasswordReset);

router.post('/reset-password', resetPassword);

module.exports = router;
