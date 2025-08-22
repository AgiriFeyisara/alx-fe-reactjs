// src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/"); // redirect to profile/home after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
