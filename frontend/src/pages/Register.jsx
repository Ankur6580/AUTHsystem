import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import { registerUser } from "../api/auth/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await registerUser(username, email, password);
      setSuccess(true);
      navigate("/dashboard"); 
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>

      {success && <div className="success-message">Registration successful!</div>}
      {error && <div className="error-message">{error}</div>}

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="register-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
