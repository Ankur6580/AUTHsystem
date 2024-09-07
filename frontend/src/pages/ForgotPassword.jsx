import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forgotPassword.css";
import { requestPasswordReset } from "../api/auth/auth"; // Import the function

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await requestPasswordReset(email);
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to send password reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-heading">Forgot Password</h1>

      {success && <div className="success-message">Password reset email sent successfully!</div>}
      {error && <div className="error-message">{error}</div>}

      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="forgot-password-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="forgot-password-button" disabled={loading}>
          {loading ? "Sending..." : "Send Password Reset Link"}
        </button>
      </form>

      <div className="login-link">
        <Link to="/auth/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
