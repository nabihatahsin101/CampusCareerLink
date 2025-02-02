import React, { useState } from "react";
import "./Circular.css";

const circulars = [
  {
    title: "Assistant Programmer, ICT",
    department: "Information and Communication Technology",
    grade: "Grade 12",
    postedOn: "2025-02-01",
    deadline: "2025-02-28",
    applicationMode: "Online",
  },
  {
    title: "Software Engineer",
    department: "Computer Science & Engineering",
    grade: "Grade 10",
    postedOn: "2025-01-15",
    deadline: "2025-02-20",
    applicationMode: "Online",
  },
  {
    title: "System Analyst",
    department: "ICT Division",
    grade: "Grade 9",
    postedOn: "2025-01-10",
    deadline: "2025-02-15",
    applicationMode: "Online",
  },
  {
    title: "Web Developer",
    department: "Web Development Team",
    grade: "Grade 8",
    postedOn: "2025-01-20",
    deadline: "2025-03-01",
    applicationMode: "Online",
  },
  {
    title: "Database Administrator",
    department: "Database Management",
    grade: "Grade 11",
    postedOn: "2025-02-10",
    deadline: "2025-03-05",
    applicationMode: "Online",
  },
];

const Circular = () => {
  const [visibleCirculars, setVisibleCirculars] = useState(4); // Set to 4 by default
  const [viewMore, setViewMore] = useState(true);

  const handleViewToggle = () => {
    if (viewMore) {
      setVisibleCirculars(circulars.length); // Show all circulars
    } else {
      setVisibleCirculars(4); // Show initial 4 circulars
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
            <p><strong>Posted On:</strong> {job.postedOn}</p>
            <p><strong>Deadline:</strong> {job.deadline}</p>
            <p><strong>Application Mode:</strong> {job.applicationMode}</p>
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
