import React from "react";
import service1 from "../../../Assist/images/service1.jpg";
import service2 from "../../../Assist/images/Untitled-2-min.png";
import service3 from "../../../Assist/images/Untitled-3-01-min-compressed.jpg";
import service4 from "../../../Assist/images/Untitled-4-01-min.png";
const Serves = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div
          className="w-full mx-auto pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          <div className="flex justify-center flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div
                className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
              >
                <div
                  className="bg-brand hover:scale-110 duration-700 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase "
                >
                  <p className="inline ">
                    <svg
                      className="w-3.5 h-3.5 mr-1"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </p>
                  <p className="inline text-xs font-medium">New</p>
                </div>
                <a
                  href="/"
                  className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-brand2"
                >
                  Write anything. Be creative.
                </a>
                <div className="pt-2 pr-0 pb-0 pl-0 text-gray-400">
                  <p className="text-sm font-medium inline">author:</p>
                  <a
                    href="/"
                    className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline"
                  >
                    MD Sadid
                  </a>
                  <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                    · 3rd, May 2023 ·
                  </p>
                  <p className="text-gray-400 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="block">
                <img src={service1} alt="/" className="rounded-lg " />
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 sm:px-5 gap-x-8 gap-y-16">
              <div className="flex flex-col group cursor-pointer items-start">
                <img
                  src={service2}
                  className="rounded-lg sm:group-hover:translate-y-12 duration-500 h-80 w-full "
                  alt="/"
                />
                <p
                  className="bg-brand flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase mt-5 z-50"
                >
                  CREW LEARNING
                </p>
                <a
                  href="/"
                  className="text-lg font-bold sm:text-xl md:text-2xl text-[#003262]"
                >
                  Improving your Skill to the MAX
                </a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <a
                    href="/"
                    className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline"
                  >
                    MD Sadid
                  </a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 3rd, May 2023 ·
                  </p>
                  <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
              <div className="flex flex-col group cursor-pointer items-start ">
                <img
                  src={service3}
                  className="rounded-lg group-hover:translate-y-12 duration-500 h-80 w-full"
                  alt="/"
                />

                <p className="bg-brand flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase mt-5 z-50">
                  CREW LEARNING
                </p>
                <a
                  href="/"
                  className="text-lg font-bold sm:text-xl md:text-2xl text-[#003262]"
                >
                  Improving your Skill to the MAX
                </a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <a
                    href="/"
                    className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline"
                  >
                    MD Sadid
                  </a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 3rd, May 2023 ·
                  </p>
                  <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
              <div className="flex flex-col group cursor-pointer items-start">
                <img
                  src={service4}
                  className="rounded-lg group-hover:translate-y-12 duration-500 h-80 w-full"
                  alt="/"
                />
                <p
                  className="bg-brand flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase mt-5 z-50"
                >
                  CREW LEARNING
                </p>
                <a
                  href="/"
                  className="text-lg font-bold sm:text-xl md:text-2xl text-[#003262]"
                >
                  Improving your Skill to the MAX
                </a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <a
                    href="/"
                    className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline"
                  >
                    MD Sadid
                  </a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 3rd, May 2023 ·
                  </p>
                  <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serves;
