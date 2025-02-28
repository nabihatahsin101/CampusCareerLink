import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Apply.css";

const Apply = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !cv) {
      setMessage("Please fill all fields and upload a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("cv", cv);
    formData.append("job_id", id);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Application submitted! Check your email for verification.");
      } else {
        setMessage(data.error || "Failed to submit application.");
      }
    } catch (error) {
      setMessage("Error submitting application.");
    }
  };

  return (
    <div className="apply-container">
      <h2>Apply for Job #{id}</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Upload CV (PDF):</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setCv(e.target.files[0])}
          required
        />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;
