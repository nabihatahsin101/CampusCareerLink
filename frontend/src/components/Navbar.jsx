import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import "../logo.css";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="AUST Logo" className="logo" />
        <h2>AUST JOB PORTAL</h2>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleMenuItemClick}>Home</Link>
        </li>
        <li>
          <Link to="/circular" onClick={handleMenuItemClick}>Circular</Link>
        </li>
        <li>
          <Link to="/profile" onClick={handleMenuItemClick}>Profile</Link>
        </li>
        <li>
          <Link to="/admin" onClick={handleMenuItemClick}>Admin Login</Link>
        </li>
        
        <li className={`dropdown ${dropdownOpen ? "open" : ""}`}>
          <Link to="/" className="dropdown-toggle" onClick={toggleDropdown}>
            Guideline
          </Link>
          
        </li>

        <li>
          <Link to="/contact" onClick={handleMenuItemClick}>Contact</Link>
        </li>
      </ul>

      <div className="auth-buttons">
       <Link to="/login">
        <button className="login">Login</button>
       </Link>
        <Link to="/signup"> {/* Add this line */}
       <button className="signup">Sign Up</button> {/* Update this button */}
      </Link>
    </div>

    </nav>
  );
};

export default Navbar;