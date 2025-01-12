# CampusCareerLink
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="table-container">
        <h2>Team Members</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>20220104111</td>
                    <td> Srabani Mitra</td>
                    <td><a href=""">srabanimitra2222@gmail.com</a></td>
                    <td>Lead &amp; Frontend</td>
                </tr>
                <tr>
                    <td>20220104113</td>
                    <td>Nusrat Jahan Adiba</td>
                    <td><a href="mailto:">nusratadiba06@gmail.com</a></td>
                    <td>Frontend &amp; Backend</td>
                </tr>
                <tr>
                    <td>20220104116</td>
                    <td>Sumaiya Aftab Prova</td>
                    <td><a href="">sumaiyaprova116@gmail.com</a></td>
                    <td>Frontend &amp; Backend</td>
                </tr>
                <tr>
                    <td>20220104119</td>
                    <td>Nabiha Tahsin Khan</td>
                    <td><a href="">nabihatahsin36@gmail.com</a></td>
                    <td>Frontend &amp; Backend</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
Project Overview

CampusCareerLink is a streamlined job-seeking platform designed to simplify the process of finding university-based employment opportunities. The platform caters to university personas and other job seekers, enabling them to explore and apply for jobs within a university ecosystem with ease.

Objective

CampusCareerLink aims to revolutionize the job search process for university-related opportunities by providing a user-friendly interface, seamless navigation, and efficient job management features. It bridges the gap between job seekers and employers in the academic world, ensuring convenience for all stakeholders.

Target Audience

University Personas:

Faculty members seeking internal or part-time opportunities.

Administrative staff exploring cross-department roles.

Students:

Current students looking for internships, assistantships, or part-time jobs.

External Job Seekers:

Professionals interested in university-centric roles.

University Administrators:

For managing job postings, applications, and hiring processes.

Tech Stack

Backend

Framework: Node.js with Express

Frontend

Framework/Library: React

Rendering Method

Client-Side Rendering (CSR)

UI Design

Tool: Figma

Design Link: CampusCareerLink Figma Design (to be added)

Project Features

1. Authentication

Google Single Sign-On (SSO):

Secure login for all users.

Role-based redirection to personalized dashboards (Job Seeker, Employer, Admin).

2. Job Seeker Portal

Browse Jobs:

Explore job listings with filters such as department, type, and eligibility.

Apply for Jobs:

Submit applications with a single click and attach resumes or required documents.

Track Applications:

View application status and history.

3. Employer Portal

Post Job Openings:

Create job postings with detailed descriptions, requirements, and deadlines.

Manage Applications:

Review, shortlist, and communicate with applicants.

Analytics:

View statistics on job applications and engagement.

4. Admin Portal

User Management:

Assign roles and manage user permissions.

Job Oversight:

Monitor job postings and application trends.

Reports and Insights:

Export data on job activity and user engagement.

5. Common Features

Dashboard:

Customized dashboards for job seekers, employers, and admins.

Notifications:

Alerts for new job postings, deadlines, and application updates.

Secure Data Management:

Role-based access control for secure handling of sensitive information.

Responsive Design:

Accessible from any device: desktop, tablet, or smartphone.

API Endpoints

1. Authentication

POST /auth/login - Login using Google SSO.

GET /auth/user - Fetch current user details.

2. Job Seeker Portal

GET /jobs - Fetch available job listings.

POST /applications - Submit a job application.

GET /applications - Fetch application history.

3. Employer Portal

POST /jobs - Create a new job posting.

GET /jobs - Fetch all jobs posted by the employer.

GET /applications/:id - Get applications for a specific job posting.

4. Admin Portal

POST /admin/users - Add a new user.

GET /admin/users - Fetch all users.

DELETE /admin/users/:id - Delete a user by ID.

PUT /admin/users/:id - Update user details.

Milestones

Milestone 1: Initial Setup and Basic Features

Set up Node.js backend and React frontend.

Implement Google Single Sign-On (SSO) for user login.

Create a basic user role structure (Job Seeker, Employer, Admin).

Milestone 2: Advanced Features and Interactions

Implement job posting and browsing functionality.

Add functionality for job seekers to apply for jobs and track applications.

Develop CRUD functionality for managing users, jobs, and applications.

Milestone 3: Final Touches and Deployment

Enhance UI design with consistent styling and responsiveness.

Conduct thorough unit, integration, and end-to-end testing.

Deploy the application to a hosting platform.

Team Members
