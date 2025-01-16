// components/Dashboard.js
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
