import React from "react";

const HomeSection1 = () => {
  return (
    <section className="relative  flex flex-col items-center justify-center h-screen  overflow-hidden bg-gradient-to-b from-blue-500 to-black  ">
      <img
        src="images/4.png "
        className="absolute bottom-0 bg-contain z-20  lg:shadow "
      />
      {/* <img
        src="images/1.png "
        className="absolute inset-0 bg-contain z-20   md:hidden"
      /> */}

      <div className="relative z-30  flex flex-col items-center justify-center gap-6 text-center mb-[4em] ">
        <div className="  text-2xl  md:text-5xl text-nowrap bg-clip-text text-white ">
          {/* <h1 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-black mb-4">
            pmcode
          </h1> */}
          <p className=" font-medium  ">
            Create and personalize your digital business
          </p>
          <p className=" font-light  ">
            Your company in the simplest way possible
          </p>
          <p className=" font-light  ">Build your company</p>
        </div>

        <button className=" border-2 text-white hover:text-black  font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
          contact us
        </button>
      </div>
    </section>
  );
};

export default HomeSection1;
