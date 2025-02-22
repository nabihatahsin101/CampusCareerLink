import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
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
        login(response.data.user);
        setError("");
        navigate("/");
      }
    } catch (error) {
      setError("⚠️ Invalid email or password!");
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });

        console.log("Google User:", userInfo.data);

        // Send user data to backend for verification
        const response = await axios.post("http://127.0.0.1:8000/api/user/google-login", {
          email: userInfo.data.email,
          name: userInfo.data.name,
          googleId: userInfo.data.sub,
        });

        if (response.status === 200) {
          login(response.data.user);
          navigate("/");
        }
      } catch (error) {
        setError("⚠️ Google login failed!");
      }
    },
    onError: () => {
      setError("⚠️ Google login failed!");
    },
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Your Account</h2>
        {error && <p className="error">{error}</p>}
        
        <form onSubmit={handleEmailLogin}>
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
          <button className="google-btn" onClick={handleGoogleLogin}>
            <FcGoogle size={20} /> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
