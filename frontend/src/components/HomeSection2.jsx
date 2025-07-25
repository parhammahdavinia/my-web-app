import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiDjango,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const HomeSection2 = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col justify-center items-center bg-gradient-to-t from-blue-500 to-black text-white py-16 md:h-screen 300">
      <h1
        data-aos="fade-down"
        className="text-4xl md:text-6xl  z-10 font-extrabold text-center mb-12 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to bg-white"
      >
        {t("skills.title")}
      </h1>
      <img
        src="images/s2.png"
        className="absolute inset-0 bg-contain bottom-0 z-0 lg:shadow opacity-20"
      />
      <div className="container mx-auto px-4">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6x mx-auto py-5">
          {/* Skill Cards */}
          <div
            data-aos="fade-up"
            className="bg-white/10 flex-col backdrop-blur-md p-6 hover:border-cyan-400 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center border-[.1em] border-white h-[13em]"
          >
            <h3 className="text-xl font-semibold">{t("skills.frontend")}</h3>
            <div className="flex flex-row">
              <SiReact className="text-blue-400 text-4xl mr-4" />
              <SiTailwindcss className="text-cyan-400 text-4xl mr-4" />
              <SiJavascript className="text-yellow-300 text-4xl mr-4" />
              <SiVite className="text-purple-400 text-4xl mr-4" />
            </div>

            <div>
              <p className="text-sm text-gray-300"></p>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="bg-white/10 flex-col backdrop-blur-md p-6 rounded-xl shadow-lg hover:border-cyan-400 transform hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[13em] border-[.1em] border-white"
          >
            <h3 className="text-xl font-semibold">{t("skills.backend")}</h3>
            <div className="flex flex-row">
              <SiPython className="text-blue-300 text-4xl mr-4" />
              <SiDjango className="text-blue-300 text-4xl mr-4" />
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-md p-6 flex-col rounded-xl hover:border-cyan-400 shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center border-[.1em] h-[13em] border-white"
          >
            <h3 className="text-xl font-semibold">{t("skills.tools")}</h3>
            <div className="flex flex-row">
              <SiDocker className="text-blue-500 text-4xl mr-4" />
              <SiGit className="text-orange-500 text-4xl mr-4" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center absolute -inset-x-0.5 z-10 md:mt-[4em]">
          <Link to="/Skills">
            <button className="border-2 text-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
              {t("see more")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
