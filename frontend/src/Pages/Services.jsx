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
  FaCheckCircle,
} from "react-icons/fa";

const serviceData = {
  fa: {
    title: "خدمات طراحی سایت",
    subtitle:
      "ارائه انواع خدمات طراحی و توسعه وب‌سایت برای کسب‌وکارها، فروشگاه‌ها، هنرمندان و افراد حرفه‌ای",
    services: [
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
    ],
    otherTitle: "سایر خدمات:",
    otherList: [
      "اتصال به درگاه پرداخت و فروش آنلاین",
      "سئو و بهینه‌سازی سایت برای گوگل",
      "راه‌اندازی وبلاگ و تولید محتوا",
      "آموزش مدیریت سایت و پنل کاربری",
      "مشاوره رایگان برای انتخاب بهترین راهکار",
    ],
  },
  en: {
    title: "Web Design Services",
    subtitle:
      "Offering a variety of web design and development services for businesses, stores, artists, and professionals.",
    services: [
      {
        icon: <FaLaptopCode className="text-blue-500 text-3xl mb-2" />,
        title: "Corporate Website Design",
        desc: "Professional website design for companies and businesses focused on branding, service introduction, and customer acquisition.",
      },
      {
        icon: <FaStore className="text-green-500 text-3xl mb-2" />,
        title: "E-commerce Website (Shop)",
        desc: "Launching an online shop with full features: cart, online payment, product management, and sales reporting.",
      },
      {
        icon: <FaImage className="text-pink-500 text-3xl mb-2" />,
        title: "Gallery & Portfolio Website",
        desc: "Building a gallery site to showcase portfolios, artworks, photography, and completed projects with attractive graphics.",
      },
      {
        icon: <FaUserTie className="text-purple-500 text-3xl mb-2" />,
        title: "Personal & Resume Website",
        desc: "Creating a personal website to introduce yourself, your resume, portfolio, and contact methods.",
      },
      {
        icon: <FaNewspaper className="text-yellow-500 text-3xl mb-2" />,
        title: "News & Magazine Website",
        desc: "Implementing a news site with content categories, search, archive, and easy content management.",
      },
      {
        icon: <FaMobileAlt className="text-cyan-500 text-3xl mb-2" />,
        title: "Responsive & Mobile Friendly",
        desc: "All websites are fully responsive and compatible with mobile and tablet.",
      },
      {
        icon: <FaCogs className="text-gray-500 text-3xl mb-2" />,
        title: "Support & Custom Development",
        desc: "Technical support, custom feature development, and site upgrades as per your needs.",
      },
      {
        icon: <FaPaintBrush className="text-red-400 text-3xl mb-2" />,
        title: "Graphic & UI/UX Design",
        desc: "Beautiful UI design and professional user experience to increase user satisfaction.",
      },
    ],
    otherTitle: "Other Services:",
    otherList: [
      "Payment gateway integration and online sales",
      "SEO and site optimization for Google",
      "Blog setup and content creation",
      "Site management and admin panel training",
      "Free consultation for the best solution",
    ],
  },
};

const Services = () => {
  const { language } = useLanguage();
  const content = serviceData[language] || serviceData.fa;

  return (
    <>
      <div className="  flex flex-col justify-center  items-center min-h-screen bg-gradient-to-b from-blue-500 to-black py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold  mt-[1em] mb-4">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.services.map((service, idx) => (
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
          <h3 className="text-xl font-semibold mb-6">{content.otherTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.otherList.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl p-4 shadow hover:shadow-lg hover:border-blue-400/50 transition-all duration-300 text-left"
              >
                <FaCheckCircle className="text-blue-400 text-xl shrink-0" />
                <span className="text-gray-100 text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Services;
