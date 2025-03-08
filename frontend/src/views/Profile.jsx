import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';  // Import the ProfilePage CSS to match styles

const Profile = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [nameEnglish, setNameEnglish] = useState('');
  const [nameBangla, setNameBangla] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [educationalInfo, setEducationalInfo] = useState('');
  const [cvFile, setCvFile] = useState(null);
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      const storedProfile = localStorage.getItem(`userProfile_${storedEmail}`);
  
      // Only parse the profile if storedProfile is not null or undefined
      if (storedProfile && storedProfile !== 'undefined' && storedProfile !== 'null') {
        try {
          const profileData = JSON.parse(storedProfile);
          setNameEnglish(profileData.nameEnglish || '');
          setNameBangla(profileData.nameBangla || '');
          setFatherName(profileData.fatherName || '');
          setMotherName(profileData.motherName || '');
          setMobileNumber(profileData.mobileNumber || '');
          setDob(profileData.dob || '');
          setAddress(profileData.address || '');
          setEducationalInfo(profileData.educationalInfo || '');
          setCvFile(profileData.cvFile || null);
        } catch (error) {
          console.error("Error parsing profile data:", error);
        }
      } else {
        console.log("No profile data available or data is invalid");
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);
  
  
  

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }
    setCvFile(file);
  };


    const handleSaveProfile = () => {
      if (!userEmail) {
        alert('Please login first!');
        return;
      }
    
      const userProfile = {
        nameEnglish,
        nameBangla,
        fatherName,
        motherName,
        mobileNumber,
        dob,
        address,
        educationalInfo,
        cvFile: cvFile ? cvFile.name : null,
      };
    
      localStorage.setItem(`userProfile_${userEmail}`, JSON.stringify(userProfile));
      alert('Profile saved successfully!');
      
      // Redirect to ProfilePage after saving
      navigate('/profile-page');
    };
    

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>

      <div className="profile-section">
        <h4>Basic Information</h4>
        <table>
          <tbody>
            <tr>
              <td><strong>Name (English):</strong></td>
              <td><input type="text" value={nameEnglish} onChange={(e) => setNameEnglish(e.target.value)} /></td>
            </tr>
            <tr>
              <td><strong>Name (Bangla):</strong></td>
              <td><input type="text" value={nameBangla} onChange={(e) => setNameBangla(e.target.value)} /></td>
            </tr>
            <tr>
              <td><strong>Father's Name:</strong></td>
              <td><input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><strong>Mother's Name:</strong></td>
              <td><input type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><strong>Mobile Number:</strong></td>
              <td><input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} /></td>
            </tr>
            <tr>
              <td><strong>Date of Birth:</strong></td>
              <td><input type="date" value={dob} onChange={(e) => setDob(e.target.value)} /></td>
            </tr>
            <tr>
              <td><strong>Mailing Address:</strong></td>
              <td><textarea value={address} onChange={(e) => setAddress(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="profile-section">
        <h4>Educational Information</h4>
        <textarea value={educationalInfo} onChange={(e) => setEducationalInfo(e.target.value)} />
      </div>

      <div className="profile-section">
        <h4>Upload CV</h4>
        <input type="file" onChange={handleCvChange} />
        {cvFile && <p>Uploaded: {cvFile.name}</p>}
      </div>

      <button className="edit-profile-btn" onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default Profile;
