import React from "react";
import teacher1 from "../../../Assist/teacher/teacher (1).jpg";
import teacher2 from "../../../Assist/teacher/teacher (2).jpg";
import teacher3 from "../../../Assist/teacher/teacher (3).jpg";
import teacher4 from "../../../Assist/teacher/teacher (4).jpg";
import teacher5 from "../../../Assist/teacher/teacher (5).jpg";
import teacher6 from "../../../Assist/teacher/teacher (6).jpg";
import { Icon } from "@iconify/react";
const OurTeacher = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-brand">
              Our Teachers
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1st card */}
            <div className="p-4 relative border border-brand rounded-xl">
              <div className="relative group">
                <img
                  src={teacher1}
                  alt=""
                  className="shadow-xl rounded-md group-hover:opacity-60 duration-300"
                />
                <div className="group-hover:m-5 m-0 rounded-xl  bg-gray-100 border border-brand border-dotted opacity-0 group-hover:opacity-100 group-hover:duration-300 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                  <div className="p-5">
                    <h2 className="tracking-widest font-bold text-sm title-font text-brand my-2">
                      Lelly Hook
                    </h2>
                    <h1 className="title-font text-xl font-bold text-brand2 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                      <Icon
                        icon="radix-icons:linkedin-logo"
                        width={28}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="fa-brands:twitter-square"
                        width={24}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="uim:whatsapp"
                        width={30}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd card */}
            <div className="p-4 relative border border-brand rounded-xl">
              <div className="relative group">
                <img
                  src={teacher2}
                  alt=""
                  className="shadow-xl rounded-md group-hover:opacity-60 duration-300"
                />
                <div className="group-hover:m-5 m-0 rounded-xl  bg-gray-100 border border-brand border-dotted opacity-0 group-hover:opacity-100 group-hover:duration-300 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                  <div className="p-5">
                    <h2 className="tracking-widest font-bold text-sm title-font text-brand my-2">
                      Labonno Zen
                    </h2>
                    <h1 className="title-font text-xl font-bold text-brand2 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                      <Icon
                        icon="radix-icons:linkedin-logo"
                        width={28}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="fa-brands:twitter-square"
                        width={24}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="uim:whatsapp"
                        width={30}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3nd card */}
            <div className="p-4 relative border border-brand rounded-xl">
              <div className="relative group">
                <img
                  src={teacher3}
                  alt=""
                  className="shadow-xl rounded-md group-hover:opacity-60 duration-300"
                />
                <div className="group-hover:m-5 m-0 rounded-xl  bg-gray-100 border border-brand border-dotted opacity-0 group-hover:opacity-100 group-hover:duration-300 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                  <div className="p-5">
                    <h2 className="tracking-widest font-bold text-sm title-font text-brand my-2">
                      Hooly Rush
                    </h2>
                    <h1 className="title-font text-xl font-bold text-brand2 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                      <Icon
                        icon="radix-icons:linkedin-logo"
                        width={28}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="fa-brands:twitter-square"
                        width={24}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="uim:whatsapp"
                        width={30}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4nd card */}
            <div className="p-4 relative border border-brand rounded-xl">
              <div className="relative group">
                <img
                  src={teacher4}
                  alt=""
                  className="shadow-xl rounded-md group-hover:opacity-60 duration-300"
                />
                <div className="group-hover:m-5 m-0 rounded-xl  bg-gray-100 border border-brand border-dotted opacity-0 group-hover:opacity-100 group-hover:duration-300 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                  <div className="p-5">
                    <h2 className="tracking-widest font-bold text-sm title-font text-brand my-2">
                      Willy Pue
                    </h2>
                    <h1 className="title-font text-xl font-bold text-brand2 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                      <Icon
                        icon="radix-icons:linkedin-logo"
                        width={28}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="fa-brands:twitter-square"
                        width={24}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="uim:whatsapp"
                        width={30}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 5th card */}
            <div className="p-4 relative border border-brand rounded-xl">
              <div className="relative group">
                <img
                  src={teacher5}
                  alt=""
                  className="shadow-xl rounded-md group-hover:opacity-60 duration-300"
                />
                <div className="group-hover:m-5 m-0 rounded-xl  bg-gray-100 border border-brand border-dotted opacity-0 group-hover:opacity-100 group-hover:duration-300 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                  <div className="p-5">
                    <h2 className="tracking-widest font-bold text-sm title-font text-brand my-2">
                      Mae Sen
                    </h2>
                    <h1 className="title-font text-xl font-bold text-brand2 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                      <Icon
                        icon="radix-icons:linkedin-logo"
                        width={28}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="fa-brands:twitter-square"
                        width={24}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="uim:whatsapp"
                        width={30}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 6th card */}
            <div className="p-4 relative border border-brand rounded-xl">
              <div className="relative group">
                <img
                  src={teacher6}
                  alt=""
                  className="shadow-xl rounded-md group-hover:opacity-60 duration-300"
                />
                <div className="group-hover:m-5 m-0 rounded-xl  bg-gray-100 border border-brand border-dotted opacity-0 group-hover:opacity-100 group-hover:duration-300 my-2 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                  <div className="p-5">
                    <h2 className="tracking-widest font-bold text-sm title-font text-brand my-2">
                      Neratum Moe
                    </h2>
                    <h1 className="title-font text-xl font-bold text-brand2 mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex justify-center items-center gap-2 cursor-pointer my-3">
                      <Icon
                        icon="radix-icons:linkedin-logo"
                        width={28}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="fa-brands:twitter-square"
                        width={24}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                      <Icon
                        icon="uim:whatsapp"
                        width={30}
                        className="text-brand2 hover:text-brand hover:-translate-y-1 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 flex justify-end">
            <button className="bg-brand text-white px-5 py-2 rounded-full font-bold flex  items-center gap-2 hover:bg-brand2 hover:-translate-x-1 duration-300">
              More Teachers
              <Icon
                icon="material-symbols:add-circle"
                width={20}
                className="mt-1"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeacher;
