import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./adminLogin.css";

const AdminLogin = () => {
  const [registerId, setRegisterId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!registerId || !password) {
      setError("⚠️ Please fill in all fields!");
      return;
    }
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ RegisterId: registerId, Password: password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        navigate('/circular');
      } else {
        setError(data.message || "Invalid credentials...");
      }
    } catch (error) {
      setError("⚠️ Failed to connect to the server.");
    }
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
