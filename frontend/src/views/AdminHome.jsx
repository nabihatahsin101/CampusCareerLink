import React from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import Sidebar from '../components/Sidebar';
import './AdminHome.css';

function AdminHome() {
  const data = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="admin-home-container">
      <Sidebar />

      <div className="admin-home-wrapper">
        <div className="admin-home-title">
          <h3>Admin Dashboard</h3>
        </div>

        <div className="admin-home-cards">
          <div className="admin-home-card">
            <h3>Total Users</h3>
            <BsFillArchiveFill className="admin-home-card-icon" />
            <h1>300</h1>
          </div>
          <div className="admin-home-card">
            <h3>Total Jobs</h3>
            <BsFillGrid3X3GapFill className="admin-home-card-icon" />
            <h1>12</h1>
          </div>
          <div className="admin-home-card">
            <h3>Total JobSeekers</h3>
            <BsPeopleFill className="admin-home-card-icon" />
            <h1>33</h1>
          </div>
          <div className="admin-home-card">
            <h3>Total Alerts</h3>
            <BsFillBellFill className="admin-home-card-icon" />
            <h1>42</h1>
          </div>
        </div>

        <div className="admin-home-charts">
          <ResponsiveContainer width="48%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="48%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
