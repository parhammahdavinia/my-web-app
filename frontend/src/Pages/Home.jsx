// src/pages/Home.jsx
import Footer from "../components/Footer";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import ToolsSection from "../components/ToolsSection";

const toolsList = [
  {
    nameKey: "فرمت‌کننده کد",
    path: "/tools/code-formatter",
    desc: "فرمت کردن کدهای مختلف برنامه‌نویسی",
    icon: "⚡",
  },
  {
    nameKey: "تولیدکننده QR کد",
    path: "/tools/qr-generator",
    desc: "ایجاد QR کد سفارشی برای متن و لینک‌ها",
    icon: "📱",
  },
  {
    nameKey: "تولیدکننده پالت رنگی",
    path: "/tools/color-palette",
    desc: "ایجاد پالت‌های رنگی زیبا و هماهنگ",
    icon: "🎨",
  },
  {
    nameKey: "تولید رمز عبور قوی",
    path: "/tools/password-generator",
    desc: "ساخت رمز عبور امن و تصادفی",
    icon: "🔐",
  },
  {
    nameKey: "هش‌ساز MD5/SHA256",
    path: "/tools/hash-generator",
    desc: "تولید هش MD5 و SHA256 از متن",
    icon: "🔑",
  },
  {
    nameKey: "رمزنگاری و رمزگشایی Base64",
    path: "/tools/base64",
    desc: "رمزنگاری و رمزگشایی متن با Base64",
    icon: "📝",
  },
];

const Home = () => {
  const { t, language } = useLanguage();
  return (
    <div className="vazir">
      <HomeSection1 />
      <HomeSection2 />
      <ServicesSection />
      <HomeSection3 />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
