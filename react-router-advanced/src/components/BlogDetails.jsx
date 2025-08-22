// src/components/BlogDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Blog Post {id}</h2>
      <p>This is where the content for blog post {id} will go.</p>
    </div>
  );
};

export default BlogDetails;
