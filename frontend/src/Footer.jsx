import React from 'react';
import './Footer.css';
import austLogo from './assets/images/aust.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={austLogo} alt="AUST Logo" />
        </div>

        {/* Links Section */}
        <div className="footer-links">
          {/* Current Students Section */}
          <div className="footer-column">
            <h3>For Current Students</h3>
            <ul>
              <li><a href="https://www.aust.edu/dsw">DSW</a></li>
              <li><a href="https://www.aust.edu/student_organization">Student Organization</a></li>
              <li><a href="https://www.aust.edu/student_notice">Student Notice</a></li>
              <li><a href="https://www.aust.edu/library">Library</a></li>
              <li><a href="https://www.aust.edu/student_panel">Student Panel</a></li>
            </ul>
          </div>

          {/* Faculty & Staff Section */}
          <div className="footer-column">
            <h3>For Faculty & Staff</h3>
            <ul>
              <li><a href="https://www.aust.edu/notices">All Notices</a></li>
              <li><a href="https://www.aust.edu/research_highlights">Research Highlights</a></li>
              <li><a href="https://www.aust.edu/university_journals">University Journals</a></li>
              <li><a href="https://www.aust.edu/conferences">Conferences</a></li>
              <li><a href="https://www.aust.edu/faculty_directories">Faculty Directories</a></li>
            </ul>
          </div>

          {/* Job Applicants Section */}
          <div className="footer-column">
            <h3>For Job Applicants</h3>
            <ul>
              <li><a href="https://www.bangladesh.gov.bd/site/view/job_category/s">সরকারি নিয়োগ বিজ্ঞপ্তি</a></li>
              <li><a href="https://www.bangladesh.gov.bd/site/view/job_category/">বাংলাদেশ জাতীয় তথ্য বাতায়ন</a></li>
              <li><a href="https://www.teletalk.com.bd">Teletalk Jobs</a></li>
              <li><a href="https://www.bdjobs.com">BD Jobs</a></li>
              <li><a href="https://www.prothomalo.com">Govt. Jobs (Prothom Alo)</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AUST Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
