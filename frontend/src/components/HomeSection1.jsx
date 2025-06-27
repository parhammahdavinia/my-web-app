import React from "react";

const HomeSection1 = () => {
  return (
    <section className="relative  flex flex-col items-center justify-center h-screen  overflow-hidden bg-gradient-to-b from-blue-500 to-black  ">
      <img src="images/4.png" className="absolute bottom-0 bg-contain z-20" />

      <div className="relative z-30 flex flex-col items-center justify-center gap-6 text-center px-4">
        <div className=" text-5xl text-nowrap bg-clip-text text-white">
          {/* <h1 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-black mb-4">
            pmcode
          </h1> */}
          <p className=" font-medium  ">ایجاد و شخصی‌سازی بزینس دیجیتال</p>
          <p className=" font-light  ">شرکت شما به ساده‌ترین شکل ممکن</p>
          <p className=" font-light  ">شرکت خود را بسازید</p>
        </div>

        <button className=" border-2 text-white hover:text-black  font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
          contact us
        </button>
      </div>
    </section>
  );
};

export default HomeSection1;
