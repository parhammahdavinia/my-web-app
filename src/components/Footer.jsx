import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-blue-800 to-purple-900 backdrop-blur-md text-white py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-1">
              پیوندها
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-gray-200 transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-gray-200 transition-colors"
                >
                  نمونه کار
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-gray-200 transition-colors"
                >
                  بلاگ
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="hover:text-gray-200 transition-colors"
                >
                  مهارت‌ها
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-1">
              تماس با ما
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-gray-200 transition-colors">
                <FaEnvelope className="text-xl" />
                <a href="mailto:info@flexdev.com" className="transition-colors">
                  info@flexdev.com
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-200 transition-colors">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://linkedin.com/in/flexdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  لینکدین
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-200 transition-colors">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/flexdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  گیت‌هاب
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-300 pb-1">
              درباره FlexDev
            </h3>
            <p className="text-sm text-gray-200 text-center md:text-left max-w-xs">
              FlexDev یک پلتفرم برای ارائه خدمات توسعه وب و نمایش پروژه‌های
              خلاقانه است. ما به کیفیت و نوآوری متعهد هستیم.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-500/30 pt-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} FlexDev. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
