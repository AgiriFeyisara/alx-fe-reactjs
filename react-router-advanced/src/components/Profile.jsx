// src/components/Profile.jsx
import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>My Profile</h2>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "1rem" }}>
          Details
        </Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Render nested routes here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Outlet fallback if needed */}
      <Outlet />
    </div>
  );
};

export default Profile;
