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
    <section className="bg-gradient-to-br from-blue-800 to-purple-900 text-white py-16 md:h-screen   ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          مهارت‌های ما
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* FlexDev Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center h-48">
            <div className="text-3xl font-bold text-gray-800">FlexDev</div>
            <p className="text-sm text-gray-300 mt-2">Core Development Hub</p>
          </div>

          {/* Skill Cards */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
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
        <div className="text-center ">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8  rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            مشاهده همه مهارت‌ها
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
