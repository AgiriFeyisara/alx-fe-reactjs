// src/components/UserProfile.jsx
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams(); // grabs the dynamic value from the URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>Showing profile for: {username}</p>
      {/* Here you could fetch user data from an API using `username` */}
    </div>
  );
};

export default UserProfile;
