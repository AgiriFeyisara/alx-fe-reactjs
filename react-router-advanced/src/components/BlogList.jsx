import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Understanding useEffect" },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
