import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  HiAcademicCap,
  HiCode,
  HiDeviceMobile,
  HiMail,
  HiUser,
} from "react-icons/hi";

const About = () => {
  const { language } = useLanguage();

  // اطلاعات فارسی
  const fa = {
    name: "پرهام مهدوی نیا",
    title:
      "دانشجوی رشته کامپیوتر و توسعه‌دهنده وب، علاقه‌مند به یادگیری و خلق پروژه‌های مدرن و حرفه‌ای.",
    details: [
      { icon: <HiAcademicCap />, text: "دانشجوی کامپیوتر" },
      { icon: <HiCode />, text: "توسعه‌دهنده React و Django" },
      {
        icon: <HiDeviceMobile />,
        text: "علاقه‌مند به طراحی ریسپانسیو و تجربه کاربری",
      },
      { icon: <HiMail />, text: "parhammahdavinia@gmail.com" },
    ],
    aboutProjectTitle: "درباره این پروژه",
    aboutProjectDesc1:
      "این وب‌سایت با هدف نمایش نمونه‌کارها و ارائه خدمات طراحی سایت، فروشگاه اینترنتی، گالری و سایر سرویس‌های مرتبط با توسعه وب ساخته شده است. تمامی بخش‌ها با استفاده از تکنولوژی‌های روز و با تمرکز بر تجربه کاربری و زیبایی پیاده‌سازی شده‌اند.",
    aboutProjectDesc2:
      "اگر به دنبال راه‌اندازی سایت حرفه‌ای یا توسعه کسب‌وکار آنلاین خود هستید، خوشحال می‌شوم با شما همکاری کنم!",
    contactTitle: "ارتباط با من",
    contactDesc:
      "برای مشاوره، سفارش پروژه یا همکاری، از طریق ایمیل یا فرم تماس سایت پیام دهید.",
    contactBtn: "ارسال ایمیل",
    email: "parhammahdavinia@gmail.com",
  };

  // اطلاعات انگلیسی
  const en = {
    name: "Parham Mahdavinia",
    title:
      "Computer engineering student and web developer, passionate about learning and building modern, professional projects.",
    details: [
      { icon: <HiAcademicCap />, text: "Computer Science Student" },
      { icon: <HiCode />, text: "React & Django Developer" },
      {
        icon: <HiDeviceMobile />,
        text: "Interested in Responsive Design & UX",
      },
      { icon: <HiMail />, text: "parhammahdavinia@gmail.com" },
    ],
    aboutProjectTitle: "About This Project",
    aboutProjectDesc1:
      "This website is built to showcase my portfolio and offer web design, e-commerce, gallery, and other web development services. All sections are implemented using modern technologies with a focus on user experience and aesthetics.",
    aboutProjectDesc2:
      "If you are looking to launch a professional website or grow your online business, I would be happy to collaborate!",
    contactTitle: "Contact Me",
    contactDesc:
      "For consulting, project requests, or collaboration, feel free to email me or use the contact form on the site.",
    contactBtn: "Send Email",
    email: "parhammahdavinia@gmail.com",
  };

  const content = language === "fa" ? fa : en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="/images/4.png"
          className="absolute bottom-0 bg-contain z-0 lg:shadow opacity-20"
          alt="Background decoration"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <HiUser className="text-6xl text-blue-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
              {content.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              {content.title}
            </p>
            <div className="flex flex-col items-center gap-2 text-blue-200 mb-4">
              {content.details.map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {item.icon} {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* درباره پروژه / About Project */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">
            {content.aboutProjectTitle}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            {content.aboutProjectDesc1}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            {content.aboutProjectDesc2}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{content.contactTitle}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {content.contactDesc}
          </p>
          <a
            href={`mailto:${content.email}`}
            className="border-2 text-white hover:text-black font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1 text-lg inline-block"
          >
            {content.contactBtn}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
