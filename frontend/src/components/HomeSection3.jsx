import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "../contexts/LanguageContext";

const HomeSection3 = () => {
  const { t } = useLanguage();

  // داده‌های پروژه‌ها
  const projects = [
    {
      id: 1,
      titleKey: "home.section3.projects.ecommerce.title",
      descriptionKey: "home.section3.projects.ecommerce.description",
      image: "/images/ec.png",
    },
    {
      id: 2,
      titleKey: "home.section3.projects.crypto.title",
      descriptionKey: "home.section3.projects.crypto.description",
      image: "/images/sar.png",
    },
    {
      id: 3,
      titleKey: "home.section3.projects.shop.title",
      descriptionKey: "home.section3.projects.shop.description",
      image: "/images/je.png",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-500 to-black text-white text-center h-screen overflow-hidden relative">
      <h2 className="text-4xl md:text-6xl absolute top-3 text-shadow-2xs inset-0 z-20 font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
        {t("home.section3.title")}
      </h2>
      <img
        src="/images/4.png"
        className="absolute bottom-0 bg-contain z-0 lg:shadow opacity-20"
        alt="Background decoration"
      />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center gap-8">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Virtual, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          virtual
          className="w-full max-w-4xl"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg h-96 flex flex-col justify-between items-center">
                {/* Image */}
                <div className="w-full h-[80%] mb-4">
                  <img
                    src={project.image || "https://via.placeholder.com/400x200"}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-fill rounded-lg"
                  />
                </div>
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t(project.descriptionKey)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="absolute -inset-x-0.5 z-10 mt-[30em]">
          <button className="border-2 text-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
            {t("home.section3.seeMore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
