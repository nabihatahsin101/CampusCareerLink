import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminCircular.css"; // Import the CSS file

const AdminCircular = () => {
  const navigate = useNavigate();
  
  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    grade: "",
    posted_on: getTodayDate(), // Automatically set today's date
    deadline: "",
    application_mode: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/circulars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✔️ Circular posted successfully!");
        setTimeout(() => navigate("/circular"), 2000);
      } else {
        setMessage("⚠️ Failed to post circular.");
      }
    } catch (error) {
      setMessage("⚠️ Server error. Try again later.");
    }
  };

  return (
    <div className="admin-circular-container">
      <h2 className="title">Post a Job Circular</h2>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="circular-form">
        
        <div className="form-group">
          <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="text" name="department" placeholder="Department" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="text" name="grade" placeholder="Officer Grade" onChange={handleChange} required />
        </div>
        
        {/* Posted On (Disabled - Auto-filled) */}
        <div className="form-group">
          <input 
            type="date" 
            name="posted_on" 
            value={formData.posted_on} 
            disabled 
            title="This is automatically set to today's date." 
          />
        </div>

        {/* Deadline with Placeholder */}
        <div className="form-group">
          <input 
            type="date" 
            name="deadline" 
            onChange={handleChange} 
            required 
            title="Select the last date for applications." 
          />
        </div>

        <div className="form-group">
          <input type="text" name="application_mode" placeholder="Application Mode" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">Post Circular</button>
        </div>
        
      </form>
    </div>
  );
};

export default AdminCircular;
