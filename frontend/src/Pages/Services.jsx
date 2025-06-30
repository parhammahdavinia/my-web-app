import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import ContactSection from "../components/ContactSection";
import {
  FaLaptopCode,
  FaStore,
  FaImage,
  FaUserTie,
  FaNewspaper,
  FaMobileAlt,
  FaCogs,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-blue-500 text-3xl mb-2" />,
    title: "طراحی سایت شرکتی",
    desc: "طراحی سایت حرفه‌ای برای شرکت‌ها و کسب‌وکارها با تمرکز بر برندینگ، معرفی خدمات و جذب مشتریان جدید.",
  },
  {
    icon: <FaStore className="text-green-500 text-3xl mb-2" />,
    title: "طراحی فروشگاه اینترنتی (شاپ)",
    desc: "راه‌اندازی فروشگاه آنلاین با امکانات کامل سبد خرید، پرداخت آنلاین، مدیریت محصولات و گزارش‌گیری فروش.",
  },
  {
    icon: <FaImage className="text-pink-500 text-3xl mb-2" />,
    title: "طراحی سایت گالری و نمونه‌کار",
    desc: "ساخت سایت گالری برای نمایش نمونه‌کارها، تصاویر هنری، عکاسی و پروژه‌های انجام شده با گرافیک جذاب.",
  },
  {
    icon: <FaUserTie className="text-purple-500 text-3xl mb-2" />,
    title: "طراحی سایت شخصی و رزومه",
    desc: "ایجاد سایت شخصی برای معرفی خود، سوابق شغلی، نمونه‌کارها و راه‌های ارتباطی.",
  },
  {
    icon: <FaNewspaper className="text-yellow-500 text-3xl mb-2" />,
    title: "طراحی سایت خبری و مجله‌ای",
    desc: "پیاده‌سازی سایت خبری با دسته‌بندی مطالب، جستجو، آرشیو و مدیریت آسان محتوا.",
  },
  {
    icon: <FaMobileAlt className="text-cyan-500 text-3xl mb-2" />,
    title: "ریسپانسیو و موبایل‌فرندلی",
    desc: "تمام سایت‌ها کاملاً ریسپانسیو و سازگار با موبایل و تبلت طراحی می‌شوند.",
  },
  {
    icon: <FaCogs className="text-gray-500 text-3xl mb-2" />,
    title: "پشتیبانی و توسعه اختصاصی",
    desc: "پشتیبانی فنی، توسعه امکانات سفارشی و ارتقاء سایت طبق نیاز شما.",
  },
  {
    icon: <FaPaintBrush className="text-red-400 text-3xl mb-2" />,
    title: "طراحی گرافیکی و UI/UX",
    desc: "طراحی رابط کاربری زیبا و تجربه کاربری حرفه‌ای برای افزایش رضایت کاربران.",
  },
];

const Services = () => {
  // اگر ترجمه انگلیسی خواستید، می‌توانید با useLanguage پیاده‌سازی کنید
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            خدمات طراحی سایت
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            ارائه انواع خدمات طراحی و توسعه وب‌سایت برای کسب‌وکارها، فروشگاه‌ها،
            هنرمندان و افراد حرفه‌ای
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 border border-white/20"
            >
              {service.icon}
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-200 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">سایر خدمات:</h3>
          <ul className="text-gray-200 space-y-1">
            <li>• اتصال به درگاه پرداخت و فروش آنلاین</li>
            <li>• سئو و بهینه‌سازی سایت برای گوگل</li>
            <li>• راه‌اندازی وبلاگ و تولید محتوا</li>
            <li>• آموزش مدیریت سایت و پنل کاربری</li>
            <li>• مشاوره رایگان برای انتخاب بهترین راهکار</li>
          </ul>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Services;
