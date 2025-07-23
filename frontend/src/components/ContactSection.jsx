import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiUser,
  HiChat,
} from "react-icons/hi";
import { FaLinkedin, FaComments } from "react-icons/fa";

const ContactSection = () => {
  const { t } = useLanguage();
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
          message: result.message || t("contact.messages.success"),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: t("contact.messages.error"),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("contact.messages.connectionError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaLinkedin className="text-3xl text-blue-500" />,
      title: "LinkedIn",
      info: "parhammahdavinia",
      link: "https://www.linkedin.com/in/parhammahdavinia/",
    },
    {
      icon: <FaComments className="text-3xl text-green-400" />,
      title: t("chat.title"),
      info: t("chat.title"),
      link: "#chat-support",
    },
    {
      icon: <HiLocationMarker className="text-3xl text-red-400" />,
      titleKey: "contact.info.address.title",
      infoKey: "contact.info.address.value",
      link: "#",
    },
    {
      icon: <HiClock className="text-3xl text-yellow-400" />,
      titleKey: "contact.info.workingHours.title",
      infoKey: "contact.info.workingHours.value",
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
          <h2
            data-aos="zoom-in"
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white"
          >
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            data-aos="flip-right"
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20"
          >
            <div className="flex items-center mb-6">
              <HiChat className="text-3xl text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">{t("contact.form.title")}</h3>
            </div>

            {/* Status Message */}
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
                    {t("contact.form.name")}
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
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder={t("contact.form.phonePlaceholder")}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.email")}
                </label>
                <div className="relative">
                  <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder={t("contact.form.messagePlaceholder")}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
              >
                {isSubmitting
                  ? t("contact.form.sending")
                  : t("contact.form.send")}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex flex-col gap-8">
              {/* باکس لینکدین */}
              <a
                href="https://www.linkedin.com/in/parhammahdavinia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                <div className="mr-4">
                  <FaLinkedin className="text-3xl text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-300">
                    linkedin.com/in/parhammahdavinia
                  </p>
                </div>
              </a>
              {/* باکس چت‌بات */}
              <div
                className="flex items-start p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-green-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                data-aos="fade-left"
                data-aos-delay="100"
                onClick={() =>
                  document
                    .querySelector(".fixed.bottom-8.right-24 button")
                    .click()
                }
              >
                <div className="mr-4">
                  <FaComments className="text-3xl text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("chat.title")}
                  </h3>
                  <p className="text-gray-300">{t("chat.welcome")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
