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
import ManageCircular from "./views/ManageCircular"; // Import ManageCircular page
import EditJobForm from "./views/EditJobForm"; // Import EditJobForm page
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserManagement from "./views/UserManagement";
import ViewDetails from "./views/Viewdetails";
import Research from './views/Research';
import Apply from "./views/Apply";

const clientId = "854801450505-s8587henb9cl084he14ap11pubok812o.apps.googleusercontent.com";

const AppLayout = () => {
  const location = useLocation();

  // Define admin-related routes where the footer should not be displayed
  const noFooterRoutes = ["/adminHome", "/sidebar", "/manage-jobs", "/edit-job/:id"];

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
          <Route path="/manage-jobs" element={<ManageCircular />} />  
          <Route path="/edit-job/:id" element={<EditJobForm />} /> 
          <Route path="/admin/userManagement" element={<UserManagement />} />

          <Route path="/jobs/:id" element={<ViewDetails/>} />
          <Route path="/research" element={<Research />} />
          <Route path="/apply/:id" element={<Apply />} />

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
