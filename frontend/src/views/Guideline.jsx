import React from "react";
import "./Guideline.css";

const Guideline = () => {
  return (
    <div className="guideline">
      <h1 className="guideline-title">Guideline for AUST Job Portal</h1>

      <section className="guideline-section">
        <h2>1. Introduction</h2>
        <p>Welcome to the AUST Job Portal! This platform connects students with recruiters and provides various job opportunities in a seamless manner.</p>
      </section>

      <section className="guideline-section">
        <h2>2. How to Register/Login</h2>
        <p>To access the features of the portal, students and recruiters need to first register. You can sign up by clicking on the <strong>"Sign Up"</strong> button located in the top-right corner of the homepage.</p>
      </section>

      <section className="guideline-section">
        <h2>3. How to Apply for Jobs</h2>
        <p>Once you have logged in, follow these steps to apply for a job:</p>
        <ul>
          <li>Visit the <strong>"Circular"</strong> section.</li>
          <li>Browse the available job postings.</li>
          <li>Select the job you're interested in and click on it for more details.</li>
          <li>Click the "Apply" button to submit your application.</li>
        </ul>
      </section>

      <section className="guideline-section">
        <h2>4. How to Upload Resume</h2>
        <p>To apply for jobs, it's important to have your resume uploaded to your profile. Here's how you can do that:</p>
        <ul>
          <li>Navigate to your <strong>"Profile"</strong> page.</li>
          <li>Click on the "Upload Resume" button and select your resume in PDF format.</li>
        </ul>
      </section>

      <section className="guideline-section">
        <h2>5. For Recruiters</h2>
        <p>If you're a recruiter looking to post jobs:</p>
        <ul>
          <li>Sign up as a recruiter on the platform.</li>
          <li>Once registered, you can access the <strong>"Admin Panel"</strong> to post new job opportunities and manage existing listings.</li>
        </ul>
      </section>

      <section className="guideline-section">
        <h2>6. Frequently Asked Questions (FAQs)</h2>
        <p><strong>Q:</strong> How can I reset my password?</p>
        <p><strong>A:</strong> Simply click on the "Forgot Password" option on the login page and follow the instructions.</p>

        <p><strong>Q:</strong> Can I apply for multiple jobs?</p>
        <p><strong>A:</strong> Yes, you can apply for as many jobs as you'd like. Just ensure your profile and resume are up-to-date.</p>
      </section>

      <section className="guideline-section">
        <h2>7. Contact Support</h2>
        <p>If you encounter any issues, you can reach out to our support team for assistance:</p>
        <p>Email: <a href="mailto:support@austjobportal.com">support@austjobportal.com</a></p>
      </section>
    </div>
  );
};  

export default Guideline;