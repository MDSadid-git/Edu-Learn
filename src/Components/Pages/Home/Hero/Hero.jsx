import React from "react";
import bannerImg from "../../../Assist/banner/banner1.png";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-brand2">
              Our Main Teacher <span className="text-brand">BIO</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ext-center transition  hover:bg-brand bg-brand2 hover:translate-x-1 duration-300  font-semibold my-3">
                Read More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded move-2"
              alt="hero"
              src={bannerImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
