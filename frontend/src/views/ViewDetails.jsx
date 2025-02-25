import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ViewDetails.css"; // Import the CSS file

const ViewDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Job not found");
        }
        const data = await response.json();
        setJob(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center error">Error: {error}</p>;

  return (
    <div className="container">
      {/* Title Section */}
      <div className="title-container">
        <h2>{job.title}</h2>
      </div>

      {/* Job Details Section */}
      <div className="details-container">
        <p><strong>Department:</strong> {job.department}</p>
        <p><strong>Officer Grade:</strong> {job.grade}</p>
        <p><strong>Salary:</strong> ${job.salary ? job.salary.toFixed(2) : "Not specified"}</p>

        <p><strong>Posted On:</strong> {job.posted_on}</p>
        <p><strong>Deadline:</strong> {job.deadline}</p>
        <p><strong>Application Mode:</strong> {job.application_mode}</p>

        {/* Apply Button */}
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
};

export default ViewDetails;
