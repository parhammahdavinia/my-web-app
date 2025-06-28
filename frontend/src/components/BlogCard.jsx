// src/components/BlogCard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaEye,
  FaCalendarAlt,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const BlogCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [userVote, setUserVote] = useState(post.user_vote);
  const [isVoting, setIsVoting] = useState(false);
  const { t, isRTL } = useLanguage();

  // بروزرسانی state وقتی post تغییر می‌کند
  useEffect(() => {
    setLikes(post.likes);
    setDislikes(post.dislikes);
    setUserVote(post.user_vote);
  }, [post]);

  const handleVote = async (voteType) => {
    if (isVoting) return;

    setIsVoting(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/posts/${post.id}/vote/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ vote_type: voteType }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setUserVote(data.user_vote);
      }
    } catch (error) {
      console.error("Error voting:", error);
    } finally {
      setIsVoting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRTL ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="group bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* تصویر */}
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* محتوا */}
      <div className="space-y-4">
        {/* عنوان */}
        <Link to={`/blog/${post.id}`} className="block">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {post.title}
          </h3>
        </Link>

        {/* توضیحات */}
        <p className="text-gray-300 leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* تاریخ */}
        <div className="flex items-center text-sm text-gray-400">
          <FaCalendarAlt className="mr-2" />
          {formatDate(post.created_at)}
        </div>

        {/* دکمه‌های رای‌گیری */}
        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          {/* لایک */}
          <button
            onClick={() => handleVote("like")}
            disabled={isVoting}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              userVote === "like"
                ? "bg-green-500/20 text-green-300 border border-green-400/50"
                : "bg-white/10 text-gray-300 hover:bg-green-500/20 hover:text-green-300 hover:border-green-400/50 border border-white/20"
            } ${
              isVoting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {userVote === "like" ? (
              <FaHeart className="text-green-400" />
            ) : (
              <FaThumbsUp />
            )}
            <span className="font-medium">{likes}</span>
          </button>

          {/* دیس‌لایک */}
          <button
            onClick={() => handleVote("dislike")}
            disabled={isVoting}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              userVote === "dislike"
                ? "bg-red-500/20 text-red-300 border border-red-400/50"
                : "bg-white/10 text-gray-300 hover:bg-red-500/20 hover:text-red-300 hover:border-red-400/50 border border-white/20"
            } ${
              isVoting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            <FaThumbsDown />
            <span className="font-medium">{dislikes}</span>
          </button>
        </div>

        {/* نمایش وضعیت رای کاربر */}
        {userVote && (
          <div className="text-center">
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                userVote === "like"
                  ? "bg-green-500/20 text-green-300 border border-green-400/30"
                  : "bg-red-500/20 text-red-300 border border-red-400/30"
              }`}
            >
              {userVote === "like" ? t("youLiked") : t("youDisliked")}
            </span>
          </div>
        )}

        {/* دکمه ادامه مطلب */}
        <div className="text-center pt-4">
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors font-medium"
          >
            {t("readMore")}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
