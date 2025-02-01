import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import ContactUs from "./ContactUs"; 
import Login from "./Login";
import Signup from "./Signup";
import Circular from "./Circular"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/circular" element={<Circular />} /> 
        <Route path="/contact" element={<ContactUs />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<Signup />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
