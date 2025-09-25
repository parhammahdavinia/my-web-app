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
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
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
    <div className="group relative overflow-hidden rounded-xl shadow-lg text-white border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* پس‌زمینه تصویر تمام‌کارت */}
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

      {/* عنوان وسط کارت */}
      <div className="relative z-10 flex items-center justify-center min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem] p-6 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
          {post.title}
        </h3>
      </div>

      {/* نوار پایینی: تاریخ و دکمه ادامه مطلب */}
      <div className="relative z-10 flex items-center justify-between gap-3 px-4 py-3 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center text-sm text-gray-200">
          <FaCalendarAlt className="mr-2" />
          {formatDate(post.created_at)}
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsOverlayOpen(true)}
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
          </button>
        </div>
      </div>

      {/* Overlay توضیحات کامل */}
      {isOverlayOpen && (
        <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="max-w-prose mx-auto">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-xl md:text-2xl font-bold">{post.title}</h4>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOverlayOpen(false)}
                  className="text-gray-200 hover:text-white transition-colors"
                  aria-label="close"
                  title={isRTL ? "بستن" : "Close"}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-gray-200 leading-8 whitespace-pre-line">
              {post.description}
            </div>
          </div>
          {/* دکمه‌های رأی پایین راست */}
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            <button
              onClick={() => handleVote("like")}
              disabled={isVoting}
              className={`transition-transform ${isVoting ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
              aria-label="like"
              title={isRTL ? "پسندیدم" : "Like"}
            >
              {userVote === "like" ? (
                <FaHeart className="w-7 h-7 text-green-400" />
              ) : (
                <FaThumbsUp className="w-7 h-7 text-gray-200 hover:text-green-300" />
              )}
            </button>
            <button
              onClick={() => handleVote("dislike")}
              disabled={isVoting}
              className={`transition-transform ${isVoting ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
              aria-label="dislike"
              title={isRTL ? "نپسندیدم" : "Dislike"}
            >
              <FaThumbsDown
                className={`w-7 h-7 ${userVote === "dislike" ? "text-red-400" : "text-gray-200 hover:text-red-300"}`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
