import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      {/* Navigation links */}
      <nav>
        <Link to="blogs" style={{ marginRight: "10px" }}>
          Blog Lists
        </Link>
        <Link to="details" style={{ marginRight: "10px" }}>
          Details
        </Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
