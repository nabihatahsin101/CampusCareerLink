import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import ContactUs from "./views/ContactUs";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Circular from "./views/Circular";
import AdminLogin from "./views/AdminLogin";
import Profile from "./views/Profile";
import Welcome from "./views/Welcome";
import Guideline from "./views/Guideline";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "854801450505-s8587henb9cl084he14ap11pubok812o.apps.googleusercontent.com";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/circular" element={<Circular />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/guideline" element={<Guideline />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/welcome" element={<Welcome />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
