import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-gradient-to-t from-blue-500 to-black backdrop-blur-md text-white py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Links Section */}
          <div className="flex flex-col  justify-center items-center">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-1">
              Link
            </h3>
            <ul className="space-y-3 flex flex-col justify-center items-center">
              <li>
                <Link to="/" className="hover:text-gray-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-gray-200 transition-colors"
                >
                  our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-gray-200 transition-colors"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="hover:text-gray-200 transition-colors"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-1">
              contact us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-gray-200 transition-colors">
                <FaEnvelope className="text-xl" />
                <a href="mailto:info@flexdev.com" className="transition-colors">
                  info@flexdev.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 hover:text-gray-200 transition-colors">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://linkedin.com/in/flexdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  linkedin
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 hover:text-gray-200 transition-colors">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/parhammahdavinia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-1">
              About Pmcode
            </h3>
            <p className="text-sm flex justify-center items-center text-gray-200 text-center  max-w-xs">
              Pm code is a platform for providing web development services and
              showcasing creative projects. We are committed to quality and
              innovation.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-500/30 pt-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()}All right reserved to PMcode
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
