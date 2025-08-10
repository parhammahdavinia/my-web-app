import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

const toolsList = [
  {
    nameKey: { fa: "فرمت‌کننده کد", en: "Code Formatter" },
    path: "/tools/code-formatter",
    desc: {
      fa: "فرمت کردن کدهای مختلف برنامه‌نویسی",
      en: "Format various programming codes",
    },
    icon: "⚡",
  },
  {
    nameKey: { fa: "تولیدکننده QR کد", en: "QR Code Generator" },
    path: "/tools/qr-generator",
    desc: {
      fa: "ایجاد QR کد سفارشی برای متن و لینک‌ها",
      en: "Create custom QR codes for text and links",
    },
    icon: "📱",
  },
  {
    nameKey: { fa: "تولیدکننده پالت رنگی", en: "Color Palette Generator" },
    path: "/tools/color-palette",
    desc: {
      fa: "ایجاد پالت‌های رنگی زیبا و هماهنگ",
      en: "Create beautiful and harmonious color palettes",
    },
    icon: "🎨",
  },
  {
    nameKey: { fa: "تولید رمز عبور قوی", en: "Password Generator" },
    path: "/tools/password-generator",
    desc: {
      fa: "ساخت رمز عبور امن و تصادفی",
      en: "Generate secure and random passwords",
    },
    icon: "🔐",
  },
  {
    nameKey: { fa: "هش‌ساز MD5/SHA256", en: "Hash Generator" },
    path: "/tools/hash-generator",
    desc: {
      fa: "تولید هش MD5 و SHA256 از متن",
      en: "Generate MD5 and SHA256 hash from text",
    },
    icon: "🔑",
  },
  {
    nameKey: { fa: "رمزنگاری و رمزگشایی Base64", en: "Base64 Encoder/Decoder" },
    path: "/tools/base64",
    desc: {
      fa: "رمزنگاری و رمزگشایی متن با Base64",
      en: "Encode and decode text with Base64",
    },
    icon: "📝",
  },
];

const ToolsSection = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-16 bg-gradient-to-t from-blue-500 to-black text-white relative overflow-hidden ">
      <div className="flex flex-col justify-center items-center mx-auto px-4 relative z-10 h-screen">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
            {t("toolsSection.title")}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t("toolsSection.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {toolsList.slice(0, 3).map((tool) => (
            <Link
              to={tool.path}
              key={tool.path}
              className="bg-white/10 hover:bg-white backdrop-blur-m rounded-xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition-all cursor-pointer  group"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {tool.icon}
              </span>
              <span className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:text-black">
                {tool.nameKey[language]}
              </span>
              <span className="text-white text-sm mb-4 text-center group-hover:text-blue-500">
                {tool.desc[language]}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/tools">
            <button className="border-2 text-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
              {t("toolsSection.seeAll")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
