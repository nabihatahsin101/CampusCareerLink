# CampusCareerLink
Simplifying Job Search for University Students and Job Seekers.

## Team Members
| Name                | Roll Number   | Email                                   | Role                             |
|---------------------|---------------|-----------------------------------------|----------------------------------|
| Srabani Mitra      | 20220104111   |srabanimitra2222@gmail.com              | Lead,Backend          |
| Nusrat Adiba       | 20220104113   | nusratadiba06@gmail.com                | Backend, Frontend     |
| Sumaiya Aftab Prova| 20220104116   |  sumaiyaprova116@gmail.com             | Backend, Frontend     |
| Nabiha Tahsin Khan | 20220104119   | nabihatahsin36@gmail.com               | Front-end,Back-end    |

## Project Overview
CampusCareerLink is a streamlined job-seeking platform designed to simplify university-based employment opportunities. It connects faculty members, administrative staff, students, and professionals with university-centric roles, ensuring a seamless experience for all stakeholders.

## Title
CampusCareerLink

## Short Description
CampusCareerLink is an innovative job-seeking platform designed to make job searching easier for university students. The platform allows users to browse job listings, apply for jobs, and receive real-time updates on application statuses.


## Key Features
- **User Management:**
  - Role-based access. Admin, Staff, and Student roles.
  - Secure authentication (login/register).
  - Restrict registration using university email domains (e.g., @uni.edu).
   
- **Job Listings:**
  - View a variety of job openings within the university.
  - Search by job category and location.
  - Job catagory such as party-time,full-time,internship.
    
 - **Profile Management:**
   - Students can upload resume, skills, and portfolio.
   - Staffs can add department, designation, and contact details.
    
- **Application Management:**
  - Students can apply to jobs.
  - Staff/Admin can review applications and shortlist candidates.
   
- **Employer Dashboard:**
  - Employers can post job listings and review applications.
  - Manage job listings and candidate profiles.
    
- **Notifications:**
  - Email alerts for job postings and applications.
  - Notifications about application status updates.
   
## Target Audience
CampusCareerLink is designed for:

- **University Students:** Students seeking internships, part-time, or full-time jobs within the university.
- **Employers:** Can post job openings within the university.

## User Interface
# [Figma Link](https://www.figma.com/design/Zpd3rCY16wEXk0Jmewa4UH/campuscareerlink-(Copy)?node-id=0-1&t=ibwHVq19kCswj4LV-1)
- **Home Page:**
Displays available job listings with a search function for users to filter by category, location.

- **Job Listing Page:**
Each job listing includes detailed information, such as job description, qualifications, and application instructions.

- **User Registration & Login:**
Easy-to-use registration and login pages for both job seekers and employers.

## Checkpoints

### Checkpoint 1
- Design mock UI for landing pages and dashboard using Figma.
- Implement homepage frontend with job listings and search functionality.
- Implement employer job posting functionality.

### Checkpoint 2
- Implement user authentication (registration & login) for both job seekers and employers.
- Implement job application feature frontend.
- Develop the employer dashboard for managing job postings.

### Checkpoint 3
- Implement backend for job application management and notifications.
- Finalize UI/UX with responsive design.
- Merge backend and frontend.
- Deploy the web application.

## Usage
1. Access the platform through your browser at the specified address (e.g., `yet to be added`).
2. Navigate through the platform to:
   - Browse job listings (job seekers).
   - Post and manage job listings (employers).
   -Track application status (job seekers).


## Setup Instructions

### Prerequisites
Before setting up the project, ensure you have the following installed:
- **PHP** (8.0.3 recommended)
- **Composer** (2.8.4 recommended)
- **XAAMP**(version 8 recommended) 
- **Node.js** (16.x or later)
- **NPM** (latest version)
- **Laravel** (latest version)
- **MySQL** or any preferred database

### Backend Setup (Laravel)
1. Navigate to the backend directory:
   ```sh
   cd api-backend
   ```
2. Install dependencies:
   ```sh
   composer install
   ```
3. Configure the environment:
   - Copy the `.env.example` file and rename it to `.env`:
     ```sh
     cp .env.example .env
     ```
   - Update database credentials in the `.env` file.

5. Run database migrations:
   ```sh
   php artisan migrate
   ```
6. Start the backend server:
   ```sh
   php artisan serve
   ```
   - This will provide a link (e.g., `http://127.0.0.1:8000`) to access the backend.

### Frontend Setup (React + Vite)
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   - This will provide a link (e.g., `http://localhost:5173`) to access the frontend.

### Running the Project
To run the full project:
1. Start the backend using:
   ```sh
   php artisan serve
   ```
2. Start the frontend using:
   ```sh
   npm run dev
   ```
3. Access the platform through the frontend link provided by Vite.

Now, you can visit the frontend link in your browser to use the application.