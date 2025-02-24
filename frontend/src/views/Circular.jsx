import React, { useState, useEffect } from "react";
import "./Circular.css";

const Circular = () => {
  const [circulars, setCirculars] = useState([]);
  const [visibleCirculars, setVisibleCirculars] = useState(4); 
  const [viewMore, setViewMore] = useState(true);

  useEffect(() => {
    // Fetch job circulars from API
    const fetchCirculars = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/posts");
        const data = await response.json();
        setCirculars(data); // Set fetched data
      } catch (error) {
        console.error("Error fetching circulars:", error);
      }
    };

    fetchCirculars();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleViewToggle = () => {
    if (viewMore) {
      setVisibleCirculars(circulars.length);
    } else {
      setVisibleCirculars(4);
    }
    setViewMore(!viewMore);
  };

  return (
    <div className="circular-container">
      <h2>Job Circulars</h2>
      <div className="circular-grid">
        {circulars.slice(0, visibleCirculars).map((job, index) => (
          <div className="circular-card" key={index}>
            <h3>{job.title}</h3>
            <p><strong>Department:</strong> {job.department}</p>
            <p><strong>Officer Grade:</strong> {job.grade}</p>
            <p><strong>Posted On:</strong> {job.posted_on}</p>
            <p><strong>Deadline:</strong> {job.deadline}</p>
            <p><strong>Application Mode:</strong> {job.application_mode}</p>
            <button className="view-details">View Details</button>
          </div>
        ))}
      </div>
      <button className="view-toggle" onClick={handleViewToggle}>
        {viewMore ? "View More Circulars" : "View Less Circulars"}
      </button>
    </div>
  );
};

export default Circular;
