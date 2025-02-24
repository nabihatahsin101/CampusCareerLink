import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminCircular.css"; 
import Api from '../components/Api';
import AdminNavbar from '../components/AdminNavbar'; 

const AdminCircular = () => {
  const { http } = Api();  // Ensure Api.js properly sets up axios
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
    posted_on: getTodayDate(),
    deadline: "",
    application_mode: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();  // Prevent page reload

    try {
      const response = await http.post("/createpost", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        setMessage("✔️ Circular posted successfully!");
        setTimeout(() => navigate("/createpost"), 2000);
      } else {
        setMessage("⚠️ Failed to post circular.");
      }
    } catch (error) {
      console.error("Error posting circular:", error);
      if (error.response && error.response.data) {
        setMessage(`⚠️ ${error.response.data.message || "Server error. Try again later."}`);
      } else {
        setMessage("⚠️ Server error. Try again later.");
      }
    }
  };

  return (
    <div className="admin-circular-page">
      {/* Include the Admin Navbar */}
      <AdminNavbar />

      <div className="admin-circular-container">
        <h2 className="title">Post a Job Circular</h2>
        {message && <p className="message">{message}</p>}

        <form onSubmit={submitForm} className="circular-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="department"
              placeholder="Department"
              onChange={handleChange}
              value={formData.department}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="grade"
              placeholder="Officer Grade"
              onChange={handleChange}
              value={formData.grade}
              required
            />
          </div>
          
          {/* Posted On (Disabled - Auto-filled) */}
          <div className="form-group">
            <input
              type="date"
              name="posted_on"
              value={formData.posted_on}
              disabled
            />
          </div>

          {/* Deadline */}
          <div className="form-group">
            <input
              type="date"
              name="deadline"
              onChange={handleChange}
              value={formData.deadline}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="application_mode"
              placeholder="Application Mode"
              onChange={handleChange}
              value={formData.application_mode}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">Post Circular</button>
          </div>
          <button 
              type="button"  // Change type to "button" to prevent form submission
              className="submit-btn2" 
              onClick={() => navigate("/manage-jobs")} // Replace with the correct route
            >
              Manage Circulars
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCircular;
