import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminCircular.css"; 
import Api from '../components/Api';
import AdminNavbar from '../components/AdminNavbar'; 
import axios from "axios";

const AdminCircular = () => {
  const { http } = Api();  // Axios instance
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
    salary: "", // Added salary field
    posted_on: getTodayDate(),
    deadline: "",
    application_mode: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: name === "salary" ? Number(value) : value // Convert salary to number
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending Data:", formData);
      const response = await http.post("/createpost", formData);

      console.log("Server Response:", response.data);

      if (response.status === 200 || response.status === 201) {
        setMessage("✔️ Circular posted successfully!");
        setTimeout(() => navigate("/manage-jobs"), 2000);
      } else {
        setMessage("⚠️ Failed to post circular.");
      }
    } catch (error) {
      console.error("Error posting circular:", error.response?.data || error);
      if (error.response?.data?.messages) {
        setMessage(`⚠️ ${JSON.stringify(error.response.data.messages)}`);
      } else {
        setMessage("⚠️ Server error. Try again later.");
      }
    }
  };

  return (
    <div className="admin-circular-page">
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

          <div className="form-group">
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              onChange={handleChange}
              value={formData.salary}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              name="posted_on"
              value={formData.posted_on}
              disabled
            />
          </div>

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
              type="button"
              className="submit-btn2" 
              onClick={() => navigate("/manage-jobs")}
            >
              Manage Circulars
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCircular;
