import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../Assist/banner/banner1.png";
import banner2 from "../../../Assist/banner/bannerTwo-02-01.png";
import { Icon } from "@iconify/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <section className="md:px-16 px-2 bg-gray-200">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex justify-center bg-gray-200  h-[70vh] items-center ">
            <div className="flex gap-5">
              <div className="flex items-center">
                <div className="md:max-w-3xl mx-auto px-5 md:px-0">
                  <h1 className="text-brand2 font-bold lg:text-5xl md:text-3xl sm:text-xl tracking-wide leading-tight text-center md:text-start">
                    Weero Edu, Anywhere <br /> Explore yourself
                  </h1>
                  <p className="my-2 text-gray-600 text-center md:text-start">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Hic vel modi reprehenderit eveniet quasi totam sit quae
                    tempora culpa tenetur. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                  <div className="flex">
                    <button className="bg-brand text-white px-3 py-2 rounded-full font-bold tracking-wide border border-white hover:border-brand hover:text-brand2 hover:bg-gray-200 duration-300 mr-3 hover:translate-x-1">
                      Register Now
                    </button>
                    <button className="flex items-center text-brand font-bold tracking-wide border border-white rounded-full px-3 py-2 hover:bg-brand2 duration-300 hover:text-white hover:translate-x-1">
                      View Courses
                      <Icon
                        icon="material-symbols:add-rounded"
                        width={18}
                        className="text-brand bg-white rounded-full mt-1 ml-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block lg:block">
                <div className="flex justify-center items-end">
                  <img className="max-w-2xl move-1" src={banner1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-gray-200 h-[70vh] items-center">
            <div className="flex gap-5">
              <div className="flex items-center">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-brand2 font-bold lg:text-5xl md:text-3xl sm:text-xl tracking-wide leading-tight">
                    Explore yourself <br /> Weero Edu, Anywhere
                  </h1>
                  <p className="my-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                  <div className="flex">
                    <button className="flex items-center mr-3 text-brand font-bold tracking-wide border border-white rounded-full px-3 py-2 hover:bg-brand2 duration-300 hover:text-white hover:translate-x-1">
                      View Courses
                      <Icon
                        icon="material-symbols:add-rounded"
                        width={18}
                        className="text-brand bg-white rounded-full mt-1 ml-2"
                      />
                    </button>
                    <button className="bg-brand text-white px-3 py-2 rounded-full font-bold tracking-wide border border-white hover:border-brand hover:text-brand2 hover:bg-gray-200 duration-300 mr-3 hover:translate-x-1">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block lg:block">
                <div className="flex justify-center items-end">
                  <img className="max-w-2xl move-1" src={banner2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
