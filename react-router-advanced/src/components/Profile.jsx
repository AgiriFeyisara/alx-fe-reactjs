// src/components/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      {/* Navigation Links */}
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link> |{" "}
        <Link to="/blogs">Blog List</Link>
      </nav>

      {/* This is where nested routes render */}
      <Outlet />
    </div>
  );
};

export default Profile;
