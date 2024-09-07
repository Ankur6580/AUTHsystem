const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const emailService = require('../services/emailService');
const { validateRegistration, validateLogin, validateResetPassword } = require('../utils/validator'); // Adjust the path as needed

const registerUser = async (req, res) => {
  try {
    const { errors, isValid } = validateRegistration(req.body);
    if (!isValid) return res.status(400).json(errors);

    const { name, email, password } = req.body;

    const existingUser = await User.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ email: 'Email already in use' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.createUser(name, email, hashedPassword);

    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: 'User registered successfully',
      userId: newUser.id,
      token,
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { errors, isValid } = validateLogin(req.body);
    if (!isValid) return res.status(400).json(errors);

    const { email, password } = req.body;

    const user = await User.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ email: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ password: 'Invalid password' });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      userId: user.id,
      token,
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token } = req.query;
    const { password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: "Invalid token or password" });
    }

    const tokenData = await User.findUserByResetToken(token);
    if (!tokenData || tokenData.expiry < Date.now()) {
      return res.status(400).json({ message: "Token is invalid or expired" });
    }

    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(password, salt);
    await User.updateUserPassword(tokenData.email, newHashedPassword);

    await emailService.sendConfirmationEmail(tokenData.email);

    return res.status(200).json({ message: "Password reset successful" });

  } catch (error) {
    console.error("Reset password error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    const { errors, isValid } = validateResetPassword({ email });
    if (!isValid) return res.status(400).json(errors);

    const user = await User.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "User not found! Please register." });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    const expiry = Date.now() + (60 * 60 * 1000);

    await User.storePasswordResetToken(user.id, token, expiry);

    await emailService.sendPasswordResetEmail(user.email, token);

    res.status(200).json({ message: "Password reset email sent successfully" });

  } catch (error) {
    console.error("Request password reset error:", error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  requestPasswordReset,
  resetPassword
};
