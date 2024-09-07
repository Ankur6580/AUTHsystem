import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";
import { loginUser } from "../api/auth/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null);

    try {
      const data = await loginUser(email, password); 

      localStorage.setItem("token", data.token); 

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      {error && <div className="error-message">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="reset-password-link">
        <Link to="/auth/forgot-password">Forgot your password?</Link>
      </div>
    </div>
  );
};

export default Login;
