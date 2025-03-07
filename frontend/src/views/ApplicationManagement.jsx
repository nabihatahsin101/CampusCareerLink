import React, { useEffect, useState } from "react";
import Api from "../components/Api";
import "./ApplicationManagement.css";

const ApplicationManagement = () => {
  const { http } = Api();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await http.get("/applications");
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await http.delete(`/applications/${id}`);
      setApplications(applications.filter((app) => app.id !== id));
      alert("Application deleted successfully");
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("Failed to delete application");
    }
  };

  return (
    <div className="application-management-container">
      <h2>Application Management</h2>
      <table className="application-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Job Title</th>
            <th>CV</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr key={app.id}>
                <td>{app.email}</td>
                <td>{app.job?.title || "Unknown Job"}</td>
                <td>
                  <a
                    href={`http://localhost:8000/storage/${app.cv}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </a>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(app.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No applications found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationManagement;
