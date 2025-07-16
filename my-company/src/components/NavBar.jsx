import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ background: "navy", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            listStyle: "none",
            color: "white",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            listStyle: "none",
            color: "white",
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            textDecoration: "none",
            listStyle: "none",
            color: "white",
          }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            listStyle: "none",
            color: "white",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
