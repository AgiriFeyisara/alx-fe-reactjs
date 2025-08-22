// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to My Routing App </h1>
      <p>This is the homepage. Use the links below to navigate.</p>

      <nav style={{ marginTop: "1rem" }}>
        <Link to="/login" style={{ marginRight: "1rem" }}>
          Login
        </Link>
        <Link to="/blog" style={{ marginRight: "1rem" }}>
          Blog
        </Link>
        <Link to="/profile/details">Profile</Link>
      </nav>
    </div>
  );
};

export default Home;
