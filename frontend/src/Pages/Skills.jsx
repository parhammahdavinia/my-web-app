// src/pages/Skills.jsx
const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-500 to-black text-white py-[10em]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" bg-white/10 flex-col backdrop-blur-md p-6 rounded-xl shadow-lg hover:border-black transform hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[13em] border-[.1em] border-white">
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p>
              React, Tailwind CSS, React.js (Hooks, Context API), React Router,
              Redux Toolkit
            </p>
          </div>
          <div className=" bg-white/10 flex-col backdrop-blur-md p-6 rounded-xl shadow-lg hover:border-black transform hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[13em] border-[.1em] border-white">
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p>Django (Basic experience in API development), PostgreSQL</p>
          </div>
          <div className=" bg-white/10 flex-col backdrop-blur-md p-6 rounded-xl shadow-lg hover:border-black transform hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[13em] border-[.1em] border-white">
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <p>Git, Docker, Vite</p>
          </div>
          <div className=" bg-white/10 flex-col backdrop-blur-md p-6 rounded-xl shadow-lg hover:border-black transform hover:scale-105 transition-transform duration-300 flex items-center justify-center h-[13em] border-[.1em] border-white">
            <h3 className="text-xl font-bold mb-2">Other skills</h3>
            <p>UI/UX Design,Scrum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
