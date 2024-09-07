const BASE_URL = import.meta.env.VITE_API_URL;

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed. Please try again.');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Register user
export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        name: username,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed. Please try again.');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Request password reset link
export const requestPasswordReset = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/reset-password-request`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to request password reset. Please try again.');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Reset password
export const resetPassword = async (token, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/reset-password?token=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      throw new Error('Failed to reset password');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
