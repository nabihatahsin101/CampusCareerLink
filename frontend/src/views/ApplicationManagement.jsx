import { useEffect, useState } from "react";
import Api from "../components/Api";
import "./ApplicationManagement.css";

const ApplicationManagement = () => {
  const { http } = Api();
  const [applications, setApplications] = useState([]);
  const [selectedApplications, setSelectedApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (!window.confirm("Are you sure you want to delete this application?")) return;

    try {
      const response = await http.delete(`/applications/${id}`);
      if (response.status === 200) {
        setApplications(applications.filter((app) => app.id !== id));
        alert("Application deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("Failed to delete application");
    }
  };

  // Selection handling
  const handleSelect = (id, isChecked) => {
    if (isChecked) {
      setSelectedApplications([...selectedApplications, id]);
    } else {
      setSelectedApplications(selectedApplications.filter(a => a !== id));
    }
  };

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedApplications(applications.map(a => a.id));
    } else {
      setSelectedApplications([]);
    }
  };

  // Send mail
  const handleSendMail = async () => {
    if (selectedApplications.length === 0) return;

    try {
      const response = await http.post("/applications/send-mail", {
        ids: selectedApplications
      });
      alert(response.data.message);
      setSelectedApplications([]);
    } catch (error) {
      console.error("Error sending mail:", error);
      alert("Failed to send mail");
    }
  };

  return (
    <div className="application-management-container">
      <h2>Application Management</h2>

      <button
        className="send-mail-btn"
        onClick={handleSendMail}
        disabled={selectedApplications.length === 0}
      >
        Send Mail
      </button>

      <table className="application-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedApplications.length === applications.length && applications.length > 0}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
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
                <td>
                  <input
                    type="checkbox"
                    checked={selectedApplications.includes(app.id)}
                    onChange={(e) => handleSelect(app.id, e.target.checked)}
                  />
                </td>
                <td>{app.email}</td>
                <td>{app.job_title || "Unknown Job"}</td>
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
              <td colSpan="5">No applications found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationManagement;
