import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = JSON.parse(localStorage.getItem("bioUser"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (email !== storedUser.email || password !== storedUser.password) {
      setError("Invalid email or password.");
      return;
    }

    alert(`Welcome back, ${storedUser.name}!`);
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass">
        <h1 className="title">🧬 BioLearn</h1>
        <p className="subtitle">Discover biology with clarity & visuals</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          {error && <p className="error">{error}</p>}

          <button className="auth-btn" type="submit">
            Login
          </button>
        </form>

        <p className="switch-text">
          New to BioLearn?{" "}
          <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
