import React, { useState } from "react";
import "./Navbar.css";
import "./logo.css";
import logo from "./assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="AUST Logo" className="logo" />
        <h2>AUST JOB PORTAL</h2>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="/" onClick={handleMenuItemClick}>Home</a>
        </li>
        <li>
          <a href="/" onClick={handleMenuItemClick}>Circular</a>
        </li>
        <li>
          <a href="/" onClick={handleMenuItemClick}>Admin Login</a>
        </li>
        
        {/* Dropdown for "Guideline" */}
        <li className={`dropdown ${dropdownOpen ? "open" : ""}`}>
          <a href="/" className="dropdown-toggle" onClick={toggleDropdown}>
            Guideline
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/">Sub-item 1</a></li>
              <li><a href="/">Sub-item 2</a></li>
              <li><a href="/">Sub-item 3</a></li>
            </ul>
          )}
        </li>

        <li>
          <a href="/" onClick={handleMenuItemClick}>Contact</a>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
