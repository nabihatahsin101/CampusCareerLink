import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/login"); // Redirect if not logged in
    } else {
      setUser(storedUser);
      setEditedUser(storedUser);
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Save updated profile
  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(editedUser)); // Update local storage
    setUser(editedUser);
    setIsEditing(false);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-name">{isEditing ? (
          <input 
            type="text" 
            name="fullname" 
            value={editedUser.fullname} 
            onChange={handleChange} 
            className="profile-input" 
          />
        ) : (
          user.fullname
        )}</h1>

        <div className="profile-details">
          <p className="profile-info">
            <strong>Email:</strong> {isEditing ? (
              <input 
                type="email" 
                name="email" 
                value={editedUser.email} 
                onChange={handleChange} 
                className="profile-input"
              />
            ) : (
              user.email
            )}
          </p>

          <p className="profile-info">
            <strong>Location:</strong> {isEditing ? (
              <input 
                type="text" 
                name="location" 
                value={editedUser.location || ""} 
                onChange={handleChange} 
                className="profile-input"
              />
            ) : (
              user.location || "Not provided"
            )}
          </p>

          <p className="profile-info">
            <strong>Member since:</strong> {user.created_at?.split("T")[0] || "Unknown"}
          </p>
        </div>

        {isEditing ? (
          <div className="profile-buttons">
            <button className="save-btn" onClick={handleSave}>Save</button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
