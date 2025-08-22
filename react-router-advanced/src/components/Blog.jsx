import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "First Blog Post", content: "Content of first blog post." },
  { id: 2, title: "Second Blog Post", content: "Content of second blog post." },
  { id: 3, title: "Third Blog Post", content: "Content of third blog post." },
];

const Blog = () => {
  const { id } = useParams(); // get :id from URL

  if (id) {
    const post = blogPosts.find((p) => p.id === parseInt(id));
    if (!post) return <h2>Post not found</h2>;

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to="/blog">← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>All Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
