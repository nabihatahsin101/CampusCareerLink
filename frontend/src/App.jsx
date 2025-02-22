import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import ContactUs from "./views/ContactUs";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Circular from "./views/Circular";
import AdminLogin from "./views/AdminLogin";
import AdminCircular from "./views/AdminCircular";
import Profile from "./views/Profile";
import Welcome from "./views/Welcome";
import Guideline from "./views/Guideline";
import AdminHome from "./views/AdminHome"; // Import AdminHome
import Sidebar from "./components/Sidebar"; // Import Sidebar
import Header from "./components/Header"; 
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "854801450505-s8587henb9cl084he14ap11pubok812o.apps.googleusercontent.com";

const AppLayout = () => {
  const location = useLocation();

  // Define admin-related routes where the footer should not be displayed
  const noFooterRoutes = ["/adminHome", "/sidebar"];

  return (
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
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/adminCirculars" element={<AdminCircular />} />

        </Routes>
      </div>

      {/* Hide Footer for Admin Pages */}
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <AppLayout />
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
