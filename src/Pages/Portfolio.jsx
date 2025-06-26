// src/pages/Portfolio.jsx
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">نمونه کارها</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Project"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">پروژه 1</h3>
            <p>توضیحات پروژه 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Project"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">پروژه 2</h3>
            <p>توضیحات پروژه 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Project"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">پروژه 3</h3>
            <p>توضیحات پروژه 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
