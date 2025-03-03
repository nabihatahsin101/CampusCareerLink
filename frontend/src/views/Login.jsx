import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';  // Import GoogleLogin from react-oauth/google
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect to profile if already authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/profile"); // Redirect if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the user enters a valid Gmail address
    if (!email.includes("@gmail.com")) {
      setError("⚠️ Please use a valid Gmail account!");
      return;
    }

    try {
      // Make an API request to login the user
      const response = await axios.post("http://127.0.0.1:8000/api/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);

        // Store user data and authentication status in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userRole", response.data.user.role);
        localStorage.setItem("userName", response.data.user.fullname); // Store user full name

        setError("");
        alert(response.data.message);
        navigate("/profile"); // Redirect after successful login
      }
    } catch (error) {
      setError("⚠️ Invalid email or password!");
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Successful", response);

    // Store the user data from Google login
    localStorage.setItem("userToken", response.credential);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userName", response?.profileObj?.name); // Store user's full name from Google

    alert("Google login successful");
    navigate("/profile"); // Redirect to profile after Google login
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
