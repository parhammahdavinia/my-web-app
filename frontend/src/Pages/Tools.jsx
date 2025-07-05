import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const toolsList = [
  {
    name: "فرمت‌کننده کد",
    path: "/tools/code-formatter",
    desc: "فرمت کردن کدهای مختلف برنامه‌نویسی",
    icon: "⚡",
  },
  {
    name: "تولیدکننده QR کد",
    path: "/tools/qr-generator",
    desc: "ایجاد QR کد سفارشی برای متن و لینک‌ها",
    icon: "📱",
  },
  {
    name: "تولیدکننده پالت رنگی",
    path: "/tools/color-palette",
    desc: "ایجاد پالت‌های رنگی زیبا و هماهنگ",
    icon: "🎨",
  },
  {
    name: "تولید رمز عبور قوی",
    path: "/tools/password-generator",
    desc: "ساخت رمز عبور امن و تصادفی",
    icon: "🔐",
  },
  {
    name: "هش‌ساز MD5/SHA256",
    path: "/tools/hash-generator",
    desc: "تولید هش MD5 و SHA256 از متن",
    icon: "🔑",
  },
  {
    name: "رمزنگاری و رمزگشایی Base64",
    path: "/tools/base64",
    desc: "رمزنگاری و رمزگشایی متن با Base64",
    icon: "📝",
  },
];

const Tools = () => {
  return (
    <div className="vazir   bg-gradient-to-b from-blue-500 to-black py-10">
      <div className="max-w-3xl h-screen flex flex-col justify-center items-center mx-auto p-6 rounded-xl shadow-lgbg-white/10 backdrop-blur-md">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          ابزارهای آنلاین کاربردی
        </h1>
        <ul className="space-y-4 w-full ">
          {toolsList.map((tool) => (
            <li
              key={tool.path}
              className="border-b pb-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to bg-white">
                    {tool.name}
                  </span>
                  <span className="block text-white text-sm mt-1">
                    {tool.desc}
                  </span>
                </div>
              </div>
              <Link
                to={tool.path}
                className="border-2 text-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                ورود
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Tools;
