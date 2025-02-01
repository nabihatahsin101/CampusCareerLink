import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import ContactUs from './ContactUs'; // Import ContactUs component
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Using Routes instead of Switch */}
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/contact" element={<ContactUs />} />  {/* ContactUs route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
