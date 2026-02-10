import React, { useState } from "react";

const Signup = ({ goToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email validation (blocks 1@gmail.com)
  const isValidEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault(); // stop refresh
    setError("");

    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("bioUser", JSON.stringify(userData));

    alert("Signup successful! Please login.");
    goToLogin();
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass">
        <h1 className="title">🌱 Create Account</h1>
        <p className="subtitle">
          Join BioLearn and explore biology visually
        </p>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Full Name</label>
          </div>

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
            Sign Up
          </button>
        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={goToLogin}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
