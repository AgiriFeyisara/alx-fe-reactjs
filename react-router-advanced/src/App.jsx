// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected profile routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Public blog routes */}
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
