import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome, HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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

  const menuItems = [
    { to: "/", text: t("home") },
    { to: "/about", text: t("about") },
    { to: "/blog", text: t("blog") },
    { to: "/skills", text: t("skills") },
  ];

  return (
    <>
      <header className="vazir  backdrop-blur-md  py-4 fixed inset-0 h-[4em] top-5  shadow-cyan-300 shadow-lg z-50 mx-auto opacity-90  rounded-3xl w-[80%]   bg-gradient-to-r from-blue-500 to-black ">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div
            data-aos="zoom-in"
            className="text-lg font-bold flex flex-row gap-1"
          >
            <div className="bg-white px-1 py-0.5  text-blue-700 rounded-sm">
              PM
            </div>
            <div className="text-white ">code</div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center items-center gap-6 space-x-6  text-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-gray-200 transition-colors flex items-center"
              >
                {item.text}
              </Link>
            ))}
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

              {/* Language Switcher in Mobile Menu */}
              <motion.div
                variants={menuItemVariants}
                custom={menuItems.length}
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
