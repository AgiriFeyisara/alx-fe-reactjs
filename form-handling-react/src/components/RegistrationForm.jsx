import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // 👈 plural 'errors'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required");
      return;
    }

    if (!email) {
      // 👈 separate check
      setErrors("Email is required");
      return;
    }

    if (!password) {
      // 👈 separate check
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Form submitted:", { username, email, password });

    // reset
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
