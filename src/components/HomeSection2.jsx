import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";

const HomeSection2 = () => {
  return (
    <section className=" relative bg-gradient-to-t from-blue-500 to-black text-white py-16 md:h-screen  300  ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  font-extrabold text-center mb-12 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to bg-white">
          our skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-5">
          {/* Skill Cards */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center ">
            <SiReact className="text-blue-400 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">React</h3>
              <p className="text-sm text-gray-300">Frontend Framework</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <SiVite className="text-purple-400 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Vite</h3>
              <p className="text-sm text-gray-300">Build Tool</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <SiTailwindcss className="text-cyan-400 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <p className="text-sm text-gray-300">Utility-First CSS</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <SiJavascript className="text-yellow-300 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">JavaScript</h3>
              <p className="text-sm text-gray-300">Programming Language</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <SiNodedotjs className="text-green-400 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Node.js</h3>
              <p className="text-sm text-gray-300">Server-Side JS</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <SiPython className="text-blue-300 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Python</h3>
              <p className="text-sm text-gray-300">Versatile Language</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center absolute -inset-x-0.5 ">
          <button className="border-2 text-white hover:text-black  font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
            مشاهده همه مهارت‌ها
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
