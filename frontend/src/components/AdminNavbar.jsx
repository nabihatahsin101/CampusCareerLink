import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul className="admin-nav-list">
        <li><Link to="/adminDashboard">Dashboard</Link></li>
        <li><Link to="/adminCirculars">Circulars</Link></li>
        <li><Link to="/adminNewjobs">New Jobs</Link></li>
        <li><Link to="/admin/userManagement">User</Link></li>
        <li><Link to="/applicationManagment">Application Managment</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>

      </ul>
    </nav>
  );
};

export default AdminNavbar;
