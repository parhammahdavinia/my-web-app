import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Button from "./common/Button";

const HomeSection1 = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-black">
      <img
        src="images/4.png"
        className="absolute bottom-0 bg-contain z-20 lg:shadow"
      />

      <div className="relative z-30 flex flex-col items-center justify-center gap-6 text-center mb-[4em]">
        <div className="text-xl md:text-5xl text-nowrap bg-clip-text text-white px-[5em]">
          <p className="font-medium" data-aos="fade-right" data-aos-delay="100">
            {t("home.section1.create")}
          </p>
          <p className="font-light" data-aos="fade-left" data-aos-delay="200">
            {t("home.section1.simplest")}
          </p>
          <p className="font-light" data-aos="fade-right" data-aos-delay="300">
            {t("home.section1.build")}
          </p>
        </div>

        <Button variant="secondary" data-aos="fade-up" data-aos-delay="400">
          {t("common.contactUs")}
        </Button>
      </div>
    </section>
  );
};

export default HomeSection1;
