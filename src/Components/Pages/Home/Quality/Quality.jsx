import React from "react";
import quality1 from "../../../Assist/quality/quality (1).jpg";
import quality2 from "../../../Assist/quality/quality (2).jpg";
import quality3 from "../../../Assist/quality/quality (3).jpg";
const Quality = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-5">
        <div
          className="group text-center p-5 hover:scale-105  duration-500  shadow-lg rounded-2xl bg-white"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <img className="p-5" src={quality2} alt="" />
          <h4 className="pb-5  text-brand text-2xl font-bold">
            Top Quality Education
          </h4>
          <p className="text-xs text-black/90">
            Providing students with personalized, learning experiences in a
            challenging and supportive environment.
          </p>
          <button className="text-sm text-[#003262] cursor-pointer group-hover:bg-brand text-center py-2 rounded-lg duration-500 font-bold w-[50%] mx-auto group-hover:text-white mt-8">
            READ MORE
          </button>
        </div>
        <div
          className="group border border-brand text-center p-5 hover:scale-110 duration-500  shadow-lg rounded-2xl bg-white"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <img className="p-5" src={quality1} alt="" />
          <h4 className="pb-5 font-bold text-brand text-2xl text-center">
            Learn Everything
          </h4>
          <p className="text-xs text-black/90">
            Obtaining an official recognition of one's knowledge, skills, and
            abilities through a certification program.
          </p>
          <button className="text-sm text-[#003262] cursor-pointer group-hover:bg-brand text-center py-2 rounded-lg duration-500 font-bold w-[50%] mx-auto group-hover:text-white mt-8">
            READ MORE
          </button>
        </div>
        <div
          className="group text-center p-5 hover:scale-110 duration-500  shadow-lg rounded-2xl bg-white"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <img className="p-5" src={quality3} alt="" />
          <h4 className="pb-5 text-brand text-2xl font-bold">Get Certified</h4>
          <p className="text-xs text-black/90">
            Obtaining an official recognition of one's knowledge, skills, and
            abilities through a certification program.
          </p>
          <button className="text-sm text-[#003262] cursor-pointer group-hover:bg-brand text-center py-2 rounded-lg duration-500 font-bold w-[50%] mx-auto group-hover:text-white mt-8">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quality;
