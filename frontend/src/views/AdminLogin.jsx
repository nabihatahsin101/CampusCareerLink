import React, { useState } from "react";
import "./adminLogin.css"; // Ensure this file is imported

const AdminLogin = () => {
  const [registerId, setRegisterId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!registerId || !password) {
      setError("⚠️ Please fill in all fields!");
      return;
    }

    console.log("Admin Logged in with:", registerId, password);
    setError(""); // Clear error on success
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Register ID</label>
            <input
              type="text"
              value={registerId}
              onChange={(e) => setRegisterId(e.target.value)}
              placeholder="Enter your Register ID"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
