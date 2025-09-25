// src/pages/Blog.jsx
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8000/api/posts/");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-500 to-black py-[10em]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-amber-50 font-bold text-center mb-8">
          blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
