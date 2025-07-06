import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaUser, FaRobot } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const ChatSupport = () => {
  const { t, language, isRTL } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "support",
      text: t("chat.welcome"),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // تغییر پیام خوش‌آمدگویی با تغییر زبان
  useEffect(() => {
    setMessages([
      {
        sender: "support",
        text: t("chat.welcome"),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, [language]);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "user",
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
  };

  return (
    <div
      className={`fixed bottom-8 right-24 z-50 flex flex-col items-end ${isRTL ? "font-vazir" : "font-sans"}`}
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      {/* دکمه چت */}
      <AnimatePresence>
        {isVisible && !open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => setOpen((v) => !v)}
            className="mb-2 p-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center backdrop-blur-md bg-opacity-80 border border-blue-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t("chat.title")}
          >
            <FaComments className="text-2xl" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* پنجره چت */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 max-w-[90vw] h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-blue-200 bg-white/60 backdrop-blur-lg"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            <div className="bg-blue-500/80 text-white p-3 flex items-center justify-between">
              <span className="font-bold flex items-center gap-2">
                <FaRobot />
                {t("chat.title")}
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-lg"
              >
                ×
              </button>
            </div>
            <div className="flex-1 p-3 overflow-y-auto bg-white/40 backdrop-blur-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-2 flex ${msg.sender === "user" ? (isRTL ? "justify-start" : "justify-end") : isRTL ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] px-3 py-2 rounded-2xl shadow text-sm flex items-end gap-2 ${msg.sender === "user" ? "bg-blue-100/80" : "bg-white/80 border border-blue-100"} ${msg.sender === "user" ? (isRTL ? "rounded-br-none" : "rounded-bl-none") : isRTL ? "rounded-bl-none" : "rounded-br-none"}`}
                    style={{ boxShadow: "0 2px 16px 0 rgba(0,0,64,0.07)" }}
                  >
                    {msg.sender === "user" ? (
                      <FaUser className="text-blue-400" />
                    ) : (
                      <FaRobot className="text-blue-400" />
                    )}
                    <span className="break-words">{msg.text}</span>
                    <span className="text-xs text-gray-400 ml-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form
              onSubmit={handleSend}
              className="p-2 bg-white/70 border-t flex gap-2 backdrop-blur-sm"
            >
              <input
                type="text"
                className="flex-1 border rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder={t("chat.placeholder")}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                dir={isRTL ? "rtl" : "ltr"}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition-colors shadow"
              >
                {t("chat.send")}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatSupport;
