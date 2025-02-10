import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Circular.css";

const Circular = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/jobs") // Ensure this URL is correct
      .then((response) => {
        setCirculars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  return (
    <div className="circular-container">
      <h2>Job Circulars</h2>
      <div className="circular-grid">
        {circulars.length > 0 ? (
          circulars.map((job, index) => (
            <div className="circular-card" key={index}>
              <h3>{job.job_name}</h3>
              <p><strong>Description:</strong> {job.job_description}</p>
              <p><strong>Salary:</strong> {job.job_salary}</p>
              <p><strong>Deadline:</strong> {job.job_deadline}</p>
              <button className="view-details">View Details</button>
            </div>
          ))
        ) : (
          <p>Loading jobs...</p>
        )}
      </div>
    </div>
  );
};

export default Circular;
