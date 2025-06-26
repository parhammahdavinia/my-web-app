import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome, HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-br from-blue-800 to-purple-900 backdrop-blur-md text-white py-4 sticky top-0 z-50 mx-auto ">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">FlexDev</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center items-center gap-6 space-x-6 space-x-reverse">
            <Link
              to="/"
              className="hover:text-gray-200 transition-colors flex items-center"
            >
              <HiHome className="text-xl mr-1" /> خانه
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-gray-200 transition-colors"
            >
              نمونه کار
            </Link>
            <Link to="/blog" className="hover:text-gray-200 transition-colors">
              بلاگ
            </Link>
            <Link
              to="/skills"
              className="hover:text-gray-200 transition-colors"
            >
              مهارت‌ها
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed inset-0 h-screen w-full bg-gray-900/90 backdrop-blur-sm flex flex-col z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
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
              <HiHome className="text-xl" /> خانه
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              نمونه کار
            </Link>
            <Link
              to="/blog"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              بلاگ
            </Link>
            <Link
              to="/skills"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              مهارت‌ها
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
