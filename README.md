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
CampusCareerLink is a streamlined job-seeking platform designed to simplify university-based employment opportunities. It connects faculty members, administrative staff, students, and professionals with university-centric roles, ensuring a seamless experience for all stakeholders.

Objective
CampusCareerLink aims to revolutionize the job search process within universities by offering:

User-friendly navigation
Efficient job management
Convenient employer-employee connection
Target Audience
University Personas: Faculty members and staff seeking part-time or cross-department roles.
Students: Opportunities for internships, assistantships, or part-time jobs.
External Job Seekers: Professionals interested in academic roles.
University Administrators: Tools for managing job postings and applications.
Tech Stack
Backend
Framework: Node.js with Express
Frontend
Framework/Library: React
Rendering Method
Client-Side Rendering (CSR)
UI Design
Tool: Figma
Project Features
Authentication
Google Single Sign-On (SSO):
Secure login.
Role-based dashboard redirection.
Job Seeker Portal
Browse Jobs: Advanced filters (department, type, eligibility).
Apply for Jobs: Easy application with attachments.
Track Applications: Monitor application status.
Employer Portal
Post Job Openings: Create detailed postings.
Manage Applications: Review, shortlist, and communicate.
Analytics: View job engagement statistics.
Admin Portal
User Management: Assign roles and permissions.
Job Oversight: Monitor postings and applications.
Reports: Export activity insights.
API Endpoints
Authentication
POST /auth/login - Login using Google SSO.
GET /auth/user - Fetch current user details.
Job Seeker Portal
GET /jobs - Fetch job listings.
POST /applications - Submit applications.
GET /applications - View application history.
Employer Portal
POST /jobs - Create job postings.
GET /jobs - View posted jobs.
GET /applications/:id - View job-specific applications.
Admin Portal
POST /admin/users - Add users.
GET /admin/users - Fetch users.
PUT /admin/users/:id - Update user details.
DELETE /admin/users/:id - Remove users.
Milestones
Milestone 1: Initial Setup
Backend: Node.js setup.
Frontend: React with Google SSO integration.
Role structure: Job Seeker, Employer, Admin.
Milestone 2: Advanced Features
Job posting and browsing.
Application submission and tracking.
CRUD operations for users, jobs, and applications.
Milestone 3: Final Touches
UI/UX refinement and responsiveness.
Comprehensive testing.
Deployment
