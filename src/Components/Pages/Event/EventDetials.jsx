import React from "react";
import MapWorld from "../Map/MapWorld";
import useTitle from "../../Hook/Hook";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper";

import image1 from "../../Assist/images/service1.jpg";

const EventDetials = () => {
  useTitle("Event Detail");
  return (
    <>
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="pt-16 text-center font-bold lg:text-5xl md:text-3xl text-xl mb-5 text-white">
          Event Details
        </h1>
        <p className="flex justify-center items-center max-w-lg font-bold mx-auto text-center  pb-16 text-gray-900 text-lg">
          <Link to={"/"} className="hover:-translate-x-1 duration-300">
            <span>Home</span>
          </Link>
          <Icon icon="mdi:slash-forward" className="mx-2" />
          Event Details
        </p>
      </div>

      <div className=" max-w-screen-xl mx-auto p-7">
        <div
          className=" relative rounded bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://img.nh-hotels.net/9yPD/bMZA1/original/Scala_MRT_NH_milano-congress-centre_138_1366x410-0_67.jpg?output-quality=70&resize=2000:*&composite-to=center,center|2000:600&background-color=white)",
          }}
        >
          <div className="h-96">
            <div className="flex space-x-5 absolute top-4 right-4 cursor-pointer">
              <Icon
                className="text-brand bg-slate-100 rounded-full p-2 hover:scale-125 scale-100 duration-300"
                width="35px"
                icon="material-symbols:share"
              />
              <Icon
                className="text-brand bg-slate-100 rounded-full p-2 hover:scale-125 scale-100 duration-300"
                width="35px"
                icon="mdi:cards-heart"
              />
            </div>
          </div>
        </div>

        <div className="p-10 space-y-5">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-brand">
            Name Of The Event
          </h1>
          <div className="flex space-x-4">
            <div>
              <Icon icon="simple-line-icons:calender" width="25px" />
            </div>
            <div>
              <p>12 September 2023 at 4 PM</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <Icon icon="carbon:currency-dollar" width="25px" />
            </div>
            <div>
              <p>20$</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <Icon icon="material-symbols:location-on-rounded" width="25px" />
            </div>
            <div>
              <p>
                Aziz Manzil - Party Place and Banquet Hall, 3/5 Topkhana Road,
                Dhaka 1000
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <Icon icon="mdi:web" width="25px" />
            </div>
            <div className="text-blue-500 underline">
              <a href="/" target="_blank">
                edulearn.com
              </a>
            </div>
          </div>
          <div></div>
        </div>

        <div className="p-10 flex justify-between border-t border-b border-black items-center">
          <div>
            <p className="opacity-50">Friday</p>
            <h1 className="font-bold md:text-lg">12 SEP</h1>
            <p className="font-medium">4 PM</p>
          </div>
          <div>
            <p className="md:text-lg font-semibold">Price: 20$</p>
          </div>
          <div>
            <button className="bg-brand2 hover:bg-brand duration-500 md:text-xl px-10 py-3 rounded-lg text-white">
              Get Ticket
            </button>
          </div>
        </div>
      </div>
      {/* map */}
      <MapWorld />

      <div className="p-7 h-72 ">
        <h1 className="text-3xl font-semibold mb-5 text-brand">More Events </h1>
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper h-64"
          >
            <SwiperSlide>
              <div
                className="bg-cover w-full h-full rounded-lg cursor-pointer"
                style={{
                  backgroundImage:
                    "url(https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/02122221/stem-list-EVgsAbL51Rk-unsplash1-min-1024x576.jpg)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover w-full h-full rounded-lg cursor-pointer "
                style={{
                  backgroundImage: `url(${image1})`,
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover w-full h-full rounded-lg cursor-pointer"
                style={{
                  backgroundImage:
                    "url(https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/02122118/samuel-pereira-uf2nnANWa8Q-unsplash-min-scaled.jpg)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover w-full h-full rounded-lg cursor-pointer"
                style={{
                  backgroundImage:
                    "url(https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/02122221/stem-list-EVgsAbL51Rk-unsplash1-min-1024x576.jpg)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover w-full h-full rounded-lg cursor-pointer"
                style={{
                  backgroundImage:
                    "url(https://www.conference2go.com/wp-content/uploads/2021/04/education-2.png)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover w-full h-full rounded-lg cursor-pointer"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli68tC4eqBqHvQc8XPx9JMXBL4TR3Di3abw&usqp=CAU)",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-cover w-full h-full rounded-lg cursor-pointer"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9QCy4XNqKISj1i45orZGTu9o0zLZUcr77A&usqp=CAU)",
                }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </>
  );
};

export default EventDetials;
