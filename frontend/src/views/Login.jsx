import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Import Google Icon
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@aust.edu')) {
      setError('⚠️ Please use a valid @aust.edu email!');
      return;
    }

    if (!email || !password) {
      setError('⚠️ Please fill in all fields!');
      return;
    }

    console.log('Logged in with:', email, password);
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
        
        {/* Google Login Icon */}
        <div className="google-login">
          <FcGoogle
            size={36} // Icon Size
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate('/welcome')}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
