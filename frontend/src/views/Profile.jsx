import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Profile.css';

const Profile = () => {
  const [selectedSection, setSelectedSection] = useState('appliedJobs');
  const [nameEnglish, setNameEnglish] = useState('');
  const [nameBangla, setNameBangla] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [educationalInfo, setEducationalInfo] = useState([]);
  const navigate = useNavigate();  // Initialize navigate hook

  const handleSectionChange = (section) => setSelectedSection(section);

  const handleCvChange = (e) => setCvFile(e.target.files[0]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');  // Redirect to the login page after logout
  };
  

  const handleAddEducation = () => {
    setEducationalInfo([...educationalInfo, { examName: '', subjectName: '', instituteName: '', passingYear: '' }]);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducationalInfo = [...educationalInfo];
    updatedEducationalInfo[index][field] = value;
    setEducationalInfo(updatedEducationalInfo);
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <ul>
          <li
            onClick={() => handleSectionChange('appliedJobs')}
            className={selectedSection === 'appliedJobs' ? 'active' : ''}
          >
            Applied Jobs
          </li>
          <li
            onClick={() => handleSectionChange('applicantInfo')}
            className={selectedSection === 'applicantInfo' ? 'active' : ''}
          >
            Applicant Info
          </li>
          <li
            onClick={() => handleSectionChange('changePassword')}
            className={selectedSection === 'changePassword' ? 'active' : ''}
          >
            Change Password
          </li>
          <li
            onClick={() => handleSectionChange('logout')}
            className={selectedSection === 'logout' ? 'active' : ''}
          >
            Logout
          </li>
        </ul>
      </div>

      <div className="profile-content">
        {selectedSection === 'appliedJobs' && (
          <div className="section">
            <h3>My Applications</h3>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Application Submitted at</th>
                  <th>Circular</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No Job Found</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {selectedSection === 'applicantInfo' && (
          <div className="section">
            <h3>Update Basic Info</h3>
            <div className="section-block">
              <h4>Basic Info</h4>
              <div className="form-group">
                <label>Name (in English) *</label>
                <input
                  type="text"
                  value={nameEnglish}
                  onChange={(e) => setNameEnglish(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Name (in Bangla) *</label>
                <input
                  type="text"
                  value={nameBangla}
                  onChange={(e) => setNameBangla(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Father Name *</label>
                <input
                  type="text"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mother Name *</label>
                <input
                  type="text"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mailing Address *</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>

            <div className="section-block">
              <h4>Educational Info</h4>
              {educationalInfo.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Exam Name</th>
                      <th>Subject Name</th>
                      <th>Institute Name</th>
                      <th>Passing Year</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {educationalInfo.map((education, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="text"
                            value={education.examName}
                            onChange={(e) =>
                              handleEducationChange(index, 'examName', e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={education.subjectName}
                            onChange={(e) =>
                              handleEducationChange(index, 'subjectName', e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={education.instituteName}
                            onChange={(e) =>
                              handleEducationChange(index, 'instituteName', e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={education.passingYear}
                            onChange={(e) =>
                              handleEducationChange(index, 'passingYear', e.target.value)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No educational info found. You can add new details.</div>
              )}
              <button onClick={handleAddEducation}>Add Education</button>
            </div>

            <div className="section-block">
              <h4>CV</h4>
              <div className="form-group">
                <label>Upload CV</label>
                <input type="file" onChange={handleCvChange} />
                {cvFile && <p>{cvFile.name}</p>}
              </div>
            </div>
            <button className="save-btn">Save</button>
          </div>
        )}

        {selectedSection === 'changePassword' && (
          <div className="section">
            <h3>Change Password</h3>
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" />
            </div>
            <button className="save-btn">Change Password</button>
          </div>
        )}
        {selectedSection === 'logout' && (
          <div className="section">
            <h3>Logout</h3>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
