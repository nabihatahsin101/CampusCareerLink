import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Research.css';

const Research = () => {
  const [researchData, setResearchData] = useState({
    title: '',
    description: '',
    researchAreas: [],
    ongoingProjects: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/research');
        setResearchData(response.data);
      } catch (error) {
        setError('Error fetching research data.');
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, []);

  if (loading) {
    return (
      <div className="research-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="research-container">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="research-container">
      <h1>{researchData.title}</h1>
      <p>{researchData.description}</p>

      <h2>Research Areas</h2>
      <ul>
        {researchData.researchAreas.length > 0 ? (
          researchData.researchAreas.map((area, index) => (
            <li key={index}>
              <strong>{area.name}</strong>: {area.details}
            </li>
          ))
        ) : (
          <p>No research areas available.</p>
        )}
      </ul>

      <h2>Ongoing Projects</h2>
      <ul>
        {researchData.ongoingProjects.length > 0 ? (
          researchData.ongoingProjects.map((project, index) => (
            <li key={index}>
              <strong>{project.projectName}</strong>: {project.projectDescription}
            </li>
          ))
        ) : (
          <p>No ongoing projects available.</p>
        )}
      </ul>
    </div>
  );
};

export default Research;
