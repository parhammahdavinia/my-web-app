// src/components/BlogCard.jsx
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const BlogCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

  const handleLike = async () => {
    const response = await fetch(
      `http://localhost:8000/api/posts/${post.id}/like/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setLikes(data.likes);
  };

  const handleDislike = async () => {
    const response = await fetch(
      `http://localhost:8000/api/posts/${post.id}/dislike/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setDislikes(data.dislikes);
  };

  return (
    <div className=" backdrop-blur-md p-6 rounded-lg shadow-lg text-white">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-white mb-4">{post.description}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-blue-600"
        >
          <FaThumbsUp /> {likes}
        </button>
        <button
          onClick={handleDislike}
          className="flex items-center gap-2 text-red-600"
        >
          <FaThumbsDown /> {dislikes}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
