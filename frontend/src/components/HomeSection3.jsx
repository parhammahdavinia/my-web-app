import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeSection3 = () => {
  // داده‌های پروژه‌ها
  const projects = [
    {
      id: 1,
      title: "پروژه E-Commerce",
      description: "سایت فروشگاهی مدرن",
      image: "",
    },
    { id: 2, title: "اپلیکیشن موبایل", description: "برنامه مدیریت کسب‌وکار" },
    { id: 3, title: "پلتفرم آموزشی", description: "سیستم یادگیری آنلاین" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-500 to-black text-white text-center   h-screen  overflow-hidden relative">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center gap-8">
        <h2 className="text-4xl font-extrabold tracking-wide">
          آخرین پروژه‌ها
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Virtual, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          virtual
          className="w-full max-w-4xl"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg h-48 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="mt-6">
          <button className="border-2 text-white hover:text-black  font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
