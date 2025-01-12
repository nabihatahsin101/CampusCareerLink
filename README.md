<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>CampusCareerLink</title>
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
                    <td><a href="mailto:srabanimitra2222@gmail.com">srabanimitra2222@gmail.com</a></td>
                    <td>Lead &amp; Frontend</td>
                </tr>
                <tr>
                    <td>20220104113</td>
                    <td>Nusrat Jahan Adiba</td>
                    <td><a href="mailto:nusratadiba06@gmail.com">nusratadiba06@gmail.com</a></td>
                    <td>Frontend &amp; Backend</td>
                </tr>
                <tr>
                    <td>20220104116</td>
                    <td>Sumaiya Aftab Prova</td>
                    <td><a href="mailto:sumaiyaprova116@gmail.com">sumaiyaprova116@gmail.com</a></td>
                    <td>Frontend &amp; Backend</td>
                </tr>
                <tr>
                    <td>20220104119</td>
                    <td>Nabiha Tahsin Khan</td>
                    <td><a href="mailto:nabihatahsin36@gmail.com">nabihatahsin36@gmail.com</a></td>
                    <td>Frontend &amp; Backend</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="project-overview">
        <h2>Project Overview</h2>
        <p>CampusCareerLink is a centralized job-seeking platform designed to simplify university-based employment opportunities. It connects faculty members, administrative staff, students, and professionals with university-centric roles, creating a seamless experience for all stakeholders.</p>

        <h2>Objective</h2>
        <ul>
            <li><strong>User-friendly navigation</strong></li>
            <li><strong>Efficient job management</strong></li>
            <li><strong>Convenient employer-employee connection</strong></li>
        </ul>

        <h2>Target Audience</h2>
        <ul>
            <li><strong>University Personas:</strong> Faculty members and staff seeking part-time or cross-department roles.</li>
            <li><strong>Students:</strong> Opportunities for internships, assistantships, or part-time jobs.</li>
            <li><strong>External Job Seekers:</strong> Professionals interested in academic roles.</li>
            <li><strong>University Administrators:</strong> Tools for managing job postings and applications.</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
            <li><strong>Backend:</strong> Node.js with Express</li>
            <li><strong>Frontend:</strong> React</li>
            <li><strong>Rendering Method:</strong> Client-Side Rendering (CSR)</li>
            <li><strong>UI Design Tool:</strong> Figma</li>
        </ul>

        <h2>Project Features</h2>
        <h3>Authentication</h3>
        <ul>
            <li><strong>Google Single Sign-On (SSO):</strong> Secure login and role-based dashboard redirection.</li>
        </ul>

        <h3>Job Seeker Portal</h3>
        <ul>
            <li><strong>Browse Jobs:</strong> Advanced filters (department, type, eligibility).</li>
            <li><strong>Apply for Jobs:</strong> Easy application with attachments.</li>
            <li><strong>Track Applications:</strong> Monitor application status.</li>
        </ul>

        <h3>Employer Portal</h3>
        <ul>
            <li><strong>Post Job Openings:</strong> Create detailed postings.</li>
            <li><strong>Manage Applications:</strong> Review, shortlist, and communicate.</li>
            <li><strong>Analytics:</strong> View job engagement statistics.</li>
        </ul>

        <h3>Admin Portal</h3>
        <ul>
            <li><strong>User Management:</strong> Assign roles and permissions.</li>
            <li><strong>Job Oversight:</strong> Monitor postings and applications.</li>
            <li><strong>Reports:</strong> Export activity insights.</li>
        </ul>

        <h2>API Endpoints</h2>
        <h3>Authentication</h3>
        <ul>
            <li><strong>POST /auth/login:</strong> Login using Google SSO.</li>
            <li><strong>GET /auth/user:</strong> Fetch current user details.</li>
        </ul>

        <h3>Job Seeker Portal</h3>
        <ul>
            <li><strong>GET /jobs:</strong> Fetch job listings.</li>
            <li><strong>POST /applications:</strong> Submit applications.</li>
            <li><strong>GET /applications:</strong> View application history.</li>
        </ul>

        <h3>Employer Portal</h3>
        <ul>
            <li><strong>POST /jobs:</strong> Create job postings.</li>
            <li><strong>GET /jobs:</strong> View posted jobs.</li>
            <li><strong>GET /applications/:id:</strong> View job-specific applications.</li>
        </ul>

        <h3>Admin Portal</h3>
        <ul>
            <li><strong>POST /admin/users:</strong> Add users.</li>
            <li><strong>GET /admin/users:</strong> Fetch users.</li>
            <li><strong>PUT /admin/users/:id:</strong> Update user details.</li>
            <li><strong>DELETE /admin/users/:id:</strong> Remove users.</li>
        </ul>

        <h2>Milestones</h2>
        <h3>Milestone 1: Initial Setup</h3>
        <ul>
            <li>Backend: Node.js setup.</li>
            <li>Frontend: React with Google SSO integration.</li>
            <li>Role structure: Job Seeker, Employer, Admin.</li>
        </ul>

        <h3>Milestone 2: Advanced Features</h3>
        <ul>
            <li>Job posting and browsing.</li>
            <li>Application submission and tracking.</li>
            <li>CRUD operations for users, jobs, and applications.</li>
        </ul>

        <h3>Milestone 3: Final Touches</h3>
        <ul>
            <li>UI/UX refinement and responsiveness.</li>
            <li>Comprehensive testing.</li>
            <li>Deployment.</li>
        </ul>
    </div>
</body>
</html>
