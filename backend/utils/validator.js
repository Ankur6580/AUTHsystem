const validator = require('validator');

function validateRegistration(data) {
  const errors = {};

  if (!data.email || !validator.isEmail(data.email)) {
    errors.email = 'Invalid email';
  }

  if (!data.password || !validator.isLength(data.password, { min: 6 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!data.name || validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

function validateLogin(data) {
  const errors = {};

  if (!data.email || !validator.isEmail(data.email)) {
    errors.email = 'Invalid email';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

function validateResetPassword(data) {
  const errors = {};

  if (!data.email || !validator.isEmail(data.email)) {
    errors.email = 'Invalid email';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

module.exports = { validateRegistration, validateLogin, validateResetPassword };
