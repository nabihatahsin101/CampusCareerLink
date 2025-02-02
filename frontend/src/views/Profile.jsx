import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* Replace the src with your actual profile image path or URL */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />
        <h1 className="profile-name">John Doe</h1>
      </div>
      <div className="profile-details">
        <p className="profile-bio">
          Hi, I'm John! I am a software developer with a passion for building
          web applications and learning new technologies.
        </p>
        <ul className="profile-info">
          <li>Email: john.doe@example.com</li>
          <li>Location: San Francisco, CA</li>
          <li>Member since: January 2020</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
