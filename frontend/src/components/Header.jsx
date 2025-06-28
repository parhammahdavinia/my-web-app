import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome, HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className="vazir  backdrop-blur-md  py-4 fixed inset-0 h-[4em] top-5  shadow-cyan-300 shadow-lg z-50 mx-auto opacity-90  rounded-3xl w-[80%]   bg-gradient-to-r from-blue-500 to-black ">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-lg font-bold flex flex-row gap-1">
            <div className="bg-white px-1 py-0.5  text-blue-700 rounded-sm">
              PM
            </div>
            <div className="text-white ">code</div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center items-center gap-6 space-x-6  text-gray-100">
            <Link
              to="/"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              {t("home")}
            </Link>
            <Link to="/about" className="hover:text-gray-200 transition-colors">
              {t("about")}
            </Link>
            <Link to="/blog" className="hover:text-gray-200 transition-colors">
              {t("blog")}
            </Link>
            <Link
              to="/skills"
              className="hover:text-gray-200 transition-colors"
            >
              {t("skills")}
            </Link>
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
      {isMenuOpen && (
        <nav className="fixed inset-0 h-screen w-full text-white vazir bg-gray-900/90 backdrop-blur-sm flex flex-col z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiX size={28} />
          </button>

          <div className="flex flex-col justify-center items-center h-full space-y-8 text-lg">
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              to="/blog"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("blog")}
            </Link>
            <Link
              to="/skills"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("skills")}
            </Link>

            {/* Language Switcher in Mobile Menu */}
            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
