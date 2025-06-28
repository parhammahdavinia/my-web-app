import React from "react";
import {
  HiUsers,
  HiLightBulb,
  HiHeart,
  HiStar,
  HiCode,
  HiGlobe,
  HiTrendingUp,
  HiShieldCheck,
} from "react-icons/hi";

const About = () => {
  const values = [
    {
      icon: <HiLightBulb className="text-4xl text-yellow-400" />,
      title: "نوآوری",
      description: "همیشه در جستجوی راه‌حل‌های خلاقانه و پیشرفته هستیم",
    },
    {
      icon: <HiHeart className="text-4xl text-red-400" />,
      title: "اشتیاق",
      description: "عشق به کدنویسی و خلق محصولات با کیفیت",
    },
    {
      icon: <HiStar className="text-4xl text-blue-400" />,
      title: "کیفیت",
      description: "تعهد به ارائه بهترین کیفیت در تمام پروژه‌ها",
    },
    {
      icon: <HiUsers className="text-4xl text-green-400" />,
      title: "همکاری",
      description: "کار تیمی و ارتباط نزدیک با مشتریان",
    },
  ];

  const stats = [
    { number: "50+", label: "پروژه موفق", icon: <HiCode /> },
    { number: "30+", label: "مشتری راضی", icon: <HiHeart /> },
    { number: "5+", label: "سال تجربه", icon: <HiTrendingUp /> },
    { number: "24/7", label: "پشتیبانی", icon: <HiShieldCheck /> },
  ];

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
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
              درباره ما
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              ما تیمی از متخصصان جوان و با انگیزه هستیم که با اشتیاق و خلاقیت،
              رویاهای دیجیتال شما را به واقعیت تبدیل می‌کنیم
            </p>
            <div className="flex items-center justify-center gap-4 text-blue-300">
              <HiGlobe className="text-3xl" />
              <span className="text-lg">از سال 2019 در خدمت شما</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-300">
                ماموریت ما
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                ما متعهد به ارائه راه‌حل‌های دیجیتال با کیفیت بالا هستیم که به
                کسب‌وکارها کمک می‌کند تا در دنیای دیجیتال موفق باشند. هدف ما خلق
                تجربه‌های کاربری استثنایی و محصولاتی است که واقعاً تفاوت ایجاد
                می‌کنند.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                با ترکیبی از تکنولوژی‌های مدرن و خلاقیت، ما پروژه‌هایی را خلق
                می‌کنیم که نه تنها زیبا هستند، بلکه عملکردی و کاربردی نیز
                می‌باشند.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">
                چشم‌انداز ما
              </h3>
              <p className="text-gray-300 leading-relaxed">
                تبدیل شدن به یکی از پیشگامان صنعت توسعه نرم‌افزار در ایران و
                ارائه خدمات با کیفیت جهانی به مشتریان داخلی و بین‌المللی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">ارزش‌های ما</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              این اصول راهنمای ما در تمام پروژه‌ها و تعاملات ما هستند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <div className="flex justify-center mb-3 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            آماده شروع پروژه شما هستیم
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            بیایید با هم رویای دیجیتال شما را به واقعیت تبدیل کنیم
          </p>
          <button className="border-2 text-white hover:text-black font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1 text-lg">
            شروع پروژه
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
