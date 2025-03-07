// ChangePassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, oldPassword, newPassword, confirmPassword } = formData;

    if (!email || !oldPassword || !newPassword || !confirmPassword) {
      setError("⚠️ Please fill in all fields!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("⚠️ New passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, oldPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password changed successfully!");
        setFormData({ email: "", oldPassword: "", newPassword: "", confirmPassword: "" });
        setError("");
        navigate("/profile"); // Redirect to the profile page
      } else {
        setError(data.message || "Password change failed.");
      }
    } catch (error) {
      setError("⚠️ Network error, please try again!");
    }
  };

  return (
    <div className="change-password-container">
      <div className="change-password-form">
        <h2>Change Password</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              placeholder="Enter your old password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter your new password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your new password"
              required
            />
          </div>
          <button type="submit" className="change-password-btn">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
