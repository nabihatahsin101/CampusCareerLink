// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import ContactUs from './ContactUs'; 
import Login from './Login';  // Import the Login component
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/contact" element={<ContactUs />} />  {/* Contact Us route */}
        <Route path="/Login" element={<Login />} />  {/* Add the Login route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
