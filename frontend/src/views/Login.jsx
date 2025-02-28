import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from '@react-oauth/google';  // Import GoogleLogin from react-oauth/google
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes("@gmail.com")) {
      setError("⚠️ Please use a valid Gmail account!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user data
        setError("");
        navigate("/profile"); // Redirect to profile page after login
      }
    } catch (error) {
      setError("⚠️ Invalid email or password!");
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    // Handle the response from Google login
    console.log("Google Login Successful", response);
    localStorage.setItem("userToken", response.credential); // Store the token or user data from Google
    navigate("/profile"); // Redirect to profile page
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Failed", error);
    setError("⚠️ Google login failed!");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Your Account</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Gmail"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>

        {/* Google Login Button */}
        <div className="google-login">
          <GoogleLogin 
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
