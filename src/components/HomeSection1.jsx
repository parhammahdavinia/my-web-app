import React from "react";

const HomeSection1 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-800 to-purple-900 overflow-hidden   ">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: "url(images/90.png)", zIndex: -10 }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-4">
        <div className="text-white">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 mb-4">
            FlexDev
          </h1>
          <p className="text-xl font-medium text-gray-200 max-w-md">
            ایجاد و شخصی‌سازی بزینس دیجیتال
          </p>
          <p className="text-lg font-light text-gray-300 max-w-md">
            شرکت شما به ساده‌ترین شکل ممکن
          </p>
          <p className="text-lg font-light text-gray-300 max-w-md">
            شرکت خود را بسازید
          </p>
        </div>

        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
          contact us
        </button>
      </div>
    </section>
  );
};

export default HomeSection1;
