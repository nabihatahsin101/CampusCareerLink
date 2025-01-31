import React from 'react';
import './home.css'; // Make sure to import the correct styles
import "./aust.css";
import aust from './assets/images/aust.png'; // Update with your image path

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-content">
          <h1>AHSANULLAH UNIVERSITY OF SCIENCE & TECHNOLOGY</h1>
          <p className="job-portal-text">Job Portal</p>
          <p className="university-address">Dhaka-1208, Bangladesh</p>
          <button className="explore-button">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
