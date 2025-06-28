import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  HiArrowLeft,
  HiCalendar,
  HiUser,
  HiTag,
  HiShare,
  HiHeart,
} from "react-icons/hi";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import BlogCard from "../components/BlogCard";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  useEffect(() => {
    fetchPost();
    fetchRelatedPosts();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setUserVote(data.user_vote);
      } else {
        navigate("/blog");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/posts/");
      if (response.ok) {
        const data = await response.json();
        // فیلتر کردن پست‌های مشابه (به جز پست فعلی)
        const related = data.filter((p) => p.id !== parseInt(id)).slice(0, 3);
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error("Error fetching related posts:", error);
    }
  };

  const handleVote = async (voteType) => {
    if (isVoting) return;

    setIsVoting(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/posts/${id}/vote/`,
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

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } else {
      // Fallback: کپی کردن URL
      navigator.clipboard.writeText(window.location.href);
      alert(t("share"));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">{t("error")}</p>
          <Link to="/blog" className="text-blue-300 hover:text-blue-100">
            {t("backToBlog")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white">
      {/* Header */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-6"
          >
            <HiArrowLeft className="text-xl" />
            <span>{t("backToBlog")}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <HiCalendar className="text-lg" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiUser className="text-lg" />
                <span>PM Code Team</span>
              </div>
              <button
                onClick={sharePost}
                className="flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <HiShare className="text-lg" />
                <span>{t("share")}</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-xl mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-300">
              {post.description}
            </p>

            {/* Extended content can be added here */}
            <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                {isRTL ? "محتوای کامل مقاله" : "Full Article Content"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {isRTL
                  ? "این بخش می‌تواند محتوای کامل مقاله را شامل شود. در حال حاضر ما فقط خلاصه‌ای از مقاله را نمایش می‌دهیم."
                  : "This section can include the full article content. Currently, we are only showing a summary of the article."}
              </p>
            </div>
          </div>

          {/* Voting Section */}
          <div className="flex items-center justify-between py-6 border-t border-white/20 mb-8">
            <div className="flex items-center gap-4">
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
                <FaThumbsUp />
                <span className="font-medium">{likes}</span>
              </button>

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

            {userVote && (
              <div className="text-sm">
                <span
                  className={`px-3 py-1 rounded-full ${
                    userVote === "like"
                      ? "bg-green-500/20 text-green-300 border border-green-400/30"
                      : "bg-red-500/20 text-red-300 border border-red-400/30"
                  }`}
                >
                  {userVote === "like" ? t("youLiked") : t("youDisliked")}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t("relatedPosts")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
