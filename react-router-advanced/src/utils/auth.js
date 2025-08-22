// src/utils/auth.js
export const isAuthenticated = () => {
  // Simulate a user login check
  // For real apps, check token/session here
  return localStorage.getItem("userLoggedIn") === "true";
};

export const login = () => localStorage.setItem("userLoggedIn", "true");
export const logout = () => localStorage.setItem("userLoggedIn", "false");
