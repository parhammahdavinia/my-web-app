import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  SiWebpack,
  SiReact,
  SiMongodb,
  SiCloudflare,
  SiDocker,
  SiGithub,
  SiAndroid,
  SiIos,
  SiPostgresql,
} from "react-icons/si";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      titleKey: "services.items.webDesign.title",
      descriptionKey: "services.items.webDesign.description",
      icon: <SiWebpack className="text-4xl text-blue-400" />,
      features: ["React.js", "Vue.js", "Tailwind CSS", "Responsive Design"],
    },

    {
      id: 3,
      titleKey: "services.items.backend.title",
      descriptionKey: "services.items.backend.description",
      icon: (
        <div className="flex gap-2">
          <SiMongodb className="text-4xl text-green-400" />
          <SiPostgresql className="text-4xl text-blue-400" />
        </div>
      ),
      features: ["Django", "Node.js", "PostgreSQL", "MongoDB"],
    },
    {
      id: 4,
      titleKey: "services.items.devops.title",
      descriptionKey: "services.items.devops.description",
      icon: <SiCloudflare className="text-4xl text-orange-400" />,
      features: ["Docker", "AWS", "CI/CD", "Monitoring"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-blue-500 text-white relative overflow-hidden">
      <img
        src="/images/4.png"
        className="absolute bottom-0 bg-contain z-0 lg:shadow opacity-20"
        alt="Background decoration"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="flip-up"
              className="bg-white/10 hover:bg-white hover:text-black backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20 hover:border-black transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">{service.icon}</div>
                <h3 className="text-2xl font-bold">{t(service.titleKey)}</h3>
              </div>

              <p className=" mb-6 leading-relaxed">
                {t(service.descriptionKey)}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-blue-300  mb-3">
                  {t("services.technologies")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-blue-3\100/20 text-blue-400  px-3 py-1 rounded-full text-sm border border-blue-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button
              data-aos="zoom-in"
              className="border-2 text-white hover:text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              {t("language") === "fa"
                ? "مشاهده همه سرویس‌ها"
                : "View All Services"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
