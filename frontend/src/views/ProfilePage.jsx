import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      
      // Ensure that the value retrieved from localStorage is valid before parsing
      const storedProfileString = localStorage.getItem(`userProfile_${storedEmail}`);
      if (storedProfileString) {
        try {
          const storedProfile = JSON.parse(storedProfileString);
          setProfile(storedProfile);
        } catch (error) {
          console.error("Error parsing profile data:", error);
          setProfile({});
        }
      } else {
        setProfile({});
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);
  

  const handleEditProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>

      <div className="profile-section">
        <h4>Basic Information</h4>
        <table>
          <tbody>
            <tr>
              <td><strong>Name (English):</strong></td>
              <td>{profile.nameEnglish || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Name (Bangla):</strong></td>
              <td>{profile.nameBangla || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Father's Name:</strong></td>
              <td>{profile.fatherName || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Mother's Name:</strong></td>
              <td>{profile.motherName || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Mobile Number:</strong></td>
              <td>{profile.mobileNumber || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Date of Birth:</strong></td>
              <td>{profile.dob || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Mailing Address:</strong></td>
              <td>{profile.address || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="profile-section">
        <h4>Educational Information</h4>
        <p>{profile.educationalInfo || 'N/A'}</p>
      </div>

      <div className="profile-section">
        <h4>Uploaded CV</h4>
        {profile.cvFile ? (
          // Fixed the path to the CV file
          <p><a href={`/uploads/${profile.cvFile}`} target="_blank" rel="noopener noreferrer">Download CV</a></p>
        ) : (
          <p>No CV uploaded</p>
        )}
      </div>

      <button className="edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
