import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiHome, HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const toolsItems = [
    {
      to: "/tools",
      text: t("tools.allTools"),
      icon: "🔧",
    },
    {
      to: "/tools/code-formatter",
      text: t("tools.codeFormatter"),
      icon: "⚡",
    },
    {
      to: "/tools/qr-generator",
      text: t("tools.qrGenerator"),
      icon: "📱",
    },
    {
      to: "/tools/color-palette",
      text: t("tools.colorPalette"),
      icon: "🎨",
    },
    {
      to: "/tools/password-generator",
      text: t("tools.passwordGenerator"),
      icon: "🔐",
    },
    {
      to: "/tools/hash-generator",
      text: t("tools.hashGenerator"),
      icon: "🔑",
    },
    {
      to: "/tools/base64",
      text: t("tools.base64Encoder"),
      icon: "📝",
    },
  ];

  const menuItems = [
    { to: "/", text: typeof t("home") === "string" ? t("home") : "خانه" },
    {
      to: "/about",
      text: typeof t("about") === "string" ? t("about") : "درباره ما",
    },
    { to: "/blog", text: typeof t("blog") === "string" ? t("blog") : "بلاگ" },
    {
      to: "/skills",
      text: typeof t("skills") === "string" ? t("skills") : "مهارت‌ها",
    },
    {
      to: "/projects",
      text: typeof t("projects") === "string" ? t("projects") : "پروژه‌ها",
    },
    { to: "/services", text: t("language") === "fa" ? "سرویس‌ها" : "Service" },
  ];

  return (
    <>
      <header
        className={`vazir fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] z-50 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-blue-500 to-black  shadow-xl transition-all duration-300 ease-in-out
    ${scrolled ? "py-6 h-[5em] shadow-2xl" : "py-4 h-[4em] shadow-cyan-300"}
    ${showHeader ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <Link
            to="/"
            data-aos="zoom-in"
            className="text-lg font-bold flex flex-row gap-1 hover:opacity-80 transition-opacity"
          >
            <div className="bg-white px-1 py-0.5 text-blue-700 rounded-sm">
              PM
            </div>
            <div className="text-white">code</div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center items-center gap-6 text-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-gray-200 transition-colors flex items-center"
              >
                {item.text}
              </Link>
            ))}

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                onBlur={() =>
                  setTimeout(() => setIsToolsDropdownOpen(false), 200)
                }
                className="hover:text-gray-200 transition-colors flex items-center gap-1 group"
              >
                {t("tools.title")}
                <HiChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isToolsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isToolsDropdownOpen && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden"
                  >
                    <div className="py-2">
                      {toolsItems.map((item, index) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setIsToolsDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 group"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm">{item.text}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="md:hidden text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 h-screen w-full text-white vazir bg-gray-900/90 backdrop-blur-sm flex flex-col z-50"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiX size={28} />
            </button>

            <div className="flex flex-col justify-center items-center h-full space-y-8 text-lg">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  custom={i}
                  variants={menuItemVariants}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}

              {/* Tools Section in Mobile Menu */}
              <motion.div
                variants={menuItemVariants}
                custom={menuItems.length}
                className="flex flex-col items-center space-y-4 w-full"
              >
                <button
                  className="flex items-center gap-2 text-lg font-semibold hover:text-gray-300 transition-colors w-full justify-center"
                  onClick={() => setIsMobileToolsOpen((prev) => !prev)}
                >
                  {t("tools.title")}
                  <HiChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${isMobileToolsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileToolsOpen && (
                  <div className="flex flex-col space-y-3 mt-2">
                    {toolsItems.map((item, index) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="flex items-center gap-3 hover:text-gray-300 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileToolsOpen(false);
                        }}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-base">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Language Switcher in Mobile Menu */}
              <motion.div
                variants={menuItemVariants}
                custom={menuItems.length + 1}
                className="mt-8"
              >
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
