const express = require('express');
const { registerUser, loginUser, verifyEmail, resetPassword } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-email', verifyEmail);
router.post('/reset-password', resetPassword);

module.exports = router;
