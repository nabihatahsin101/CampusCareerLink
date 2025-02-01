import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import ContactUs from './ContactUs'; 
import Login from './Login';
import Signup from './Signup'; // Import the Signup component
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/contact" element={<ContactUs />} />  {/* Contact Us route */}
        <Route path="/login" element={<Login />} />  {/* Login route */}
        <Route path="/signup" element={<Signup />} />  {/* Signup route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
