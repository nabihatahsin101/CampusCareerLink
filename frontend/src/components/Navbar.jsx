import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="AUST Logo" className="logo" />
        <h2>CampusCareerLink</h2>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["Home", "Circular", "Profile", "Admin Login", "Guideline", "Contact"].map((item, index) => (
          <li key={index}><Link to={`/${item.toLowerCase().replace(" ", "")}`} onClick={() => setMenuOpen(false)}>{item}</Link></li>
        ))}
      </ul>

      <div className="auth-buttons">
        <Link to="/login"><button className="login">Login</button></Link>
        <Link to="/signup"><button className="signup">Sign Up</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
