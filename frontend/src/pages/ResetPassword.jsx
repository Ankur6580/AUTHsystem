import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/resetPassword.css";
import { resetPassword } from "../api/auth/auth";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await resetPassword(token, password);
      setSuccess(true);
      alert("Password reset successful. You can now login with your new password.");
      navigate('/auth/login');

    } catch (err) {
      setError(err.message || "Reset password failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-container">
      <h1 className="reset-heading">Reset Password</h1>

      {error && <div className="error-message">{error}</div>}

      <form className="reset-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          className="reset-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="reset-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="reset-button" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
