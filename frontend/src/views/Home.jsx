import React from "react";
import "./Home.css"; // Assuming Home.css is in the same folder as Home.jsx
import "../aust.css"; // Update path if aust.css is in the assets folder
import aust from '../assets/images/aust.png'; 
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
