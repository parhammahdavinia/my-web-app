// src/pages/Skills.jsx
const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-500 to-cyan-300 py-[10em]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">مهارت‌ها</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">فرانت‌اند</h3>
            <p>React, Tailwind CSS, JavaScript, TypeScript</p>
          </div>
          <div className=" p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-2">بک‌اند</h3>
            <p>Django, Node.js, Express, PostgreSQL</p>
          </div>
          <div className=" p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-2">ابزارها</h3>
            <p>Git, Docker, Webpack, Vite</p>
          </div>
          <div className=" p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-2">مهارت‌های دیگر</h3>
            <p>UI/UX Design, Agile, Scrum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
