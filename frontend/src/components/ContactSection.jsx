import React, { useState } from "react";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiUser,
  HiChat,
} from "react-icons/hi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus({
          type: "success",
          message: result.message || "پیام شما با موفقیت ارسال شد!",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "خطا در اتصال به سرور. لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiMail className="text-3xl text-blue-400" />,
      title: "ایمیل",
      info: "info@pmcode.com",
      link: "mailto:info@pmcode.com",
    },
    {
      icon: <HiPhone className="text-3xl text-green-400" />,
      title: "تلفن",
      info: "+98 912 123 4567",
      link: "tel:+989121234567",
    },
    {
      icon: <HiLocationMarker className="text-3xl text-red-400" />,
      title: "آدرس",
      info: "تهران، خیابان ولیعصر",
      link: "#",
    },
    {
      icon: <HiClock className="text-3xl text-yellow-400" />,
      title: "ساعات کاری",
      info: "شنبه تا چهارشنبه: 9 صبح تا 6 عصر",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-t from-black to-blue-500 text-white relative overflow-hidden">
      <img
        src="/images/4.png"
        className="absolute bottom-0 bg-contain z-0 lg:shadow opacity-20"
        alt="Background decoration"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
            تماس با ما
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            آماده‌ایم تا رویای دیجیتال شما را به واقعیت تبدیل کنیم. با ما در
            تماس باشید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* فرم تماس */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
            <div className="flex items-center mb-6">
              <HiChat className="text-3xl text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">ارسال پیام</h3>
            </div>

            {/* پیام وضعیت */}
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border border-green-400 text-green-200"
                    : "bg-red-500/20 border border-red-400 text-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    نام و نام خانوادگی
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    شماره تلفن
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="شماره تلفن"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">ایمیل</label>
                <div className="relative">
                  <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">پیام</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full border-2 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "hover:text-black hover:bg-blue-100"
                }`}
              >
                {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
              </button>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">اطلاعات تماس</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 space-x-reverse"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-1">
                        {item.title}
                      </h4>
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* نقشه یا تصویر */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-4">موقعیت ما</h3>
              <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-400">
                  نقشه یا تصویر موقعیت اینجا قرار می‌گیرد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
