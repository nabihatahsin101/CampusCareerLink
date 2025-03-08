import React, { useState, useEffect } from 'react';

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import Sidebar from '../components/Sidebar';
import './AdminHome.css';
import AdminNavbar from '../components/AdminNavbar';

function AdminHome() {
  // States to hold dynamic data
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalJobSeekers, setTotalJobSeekers] = useState(0);
  const [totalAlerts, setTotalAlerts] = useState(0);

  // Fetching data from your backend API
  useEffect(() => {
    // Replace with your actual API URLs
    const fetchDashboardData = async () => {
      try {
        const jobsResponse = await fetch('/api/jobs/count');
        const jobsData = await jobsResponse.json();
        setTotalJobs(jobsData.count); // Setting the total jobs count
      } catch (error) {
        console.error('Error fetching job count:', error);
      }
    };
     
    fetchDashboardData();
  }, []);

  return (
    <div className="admin-home-container">
      <AdminNavbar />
      <Sidebar />

      <div className="admin-home-wrapper">
        <div className="admin-home-title">
          <h3>Admin Dashboard</h3>
        </div>

        <div className="admin-home-cards">
          <div className="admin-home-card">
            <h3>Total Users</h3>
            <BsFillArchiveFill className="admin-home-card-icon" />
            <h1>{totalUsers}</h1>
          </div>
          <div className="admin-home-card">
            <h3>Total Jobs</h3>
            <BsFillGrid3X3GapFill className="admin-home-card-icon" />
            <h1>{totalJobs}</h1>
          </div>
          <div className="admin-home-card">
            <h3>Total JobSeekers</h3>
            <BsPeopleFill className="admin-home-card-icon" />
            <h1>{totalJobSeekers}</h1>
          </div>
          <div className="admin-home-card">
            <h3>Total Alerts</h3>
            <BsFillBellFill className="admin-home-card-icon" />
            <h1>{totalAlerts}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
