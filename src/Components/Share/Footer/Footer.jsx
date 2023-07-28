import React from "react";
import { Icon } from "@iconify/react";
import whiteLogo from "../../Assist/logo/logoWhite.svg";
const Footer = () => {
  return (
    <div className="bg-brand mt-20 lg:p-24 p-5 text-gray-200 ">
      <div className=" md:max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-7">
          <div className=" ">
            <img src={whiteLogo} alt="" className="w-36 h-auto mb-3" />

            <p className="my-5">
              A platform for finding doctors serves. A single place where find
              the best doctors and any issues we give support to our patients.
            </p>
            <div className="flex justify-end items-center gap-2 cursor-pointer my-3">
              <Icon
                icon="radix-icons:linkedin-logo"
                width={28}
                className="text-gray-200 hover:text-brand2 hover:-translate-y-1 duration-300"
              />
              <Icon
                icon="fa-brands:twitter-square"
                width={24}
                className="text-gray-200 hover:text-brand2 hover:-translate-y-1 duration-300"
              />
              <Icon
                icon="uim:whatsapp"
                width={30}
                className="text-gray-200 hover:text-brand2 hover:-translate-y-1 duration-300"
              />
            </div>
          </div>

          <div className=" ">
            <h5 className="text-[#fff] font-bold mb-5">CONTACT US</h5>
            <hr className="border border-[#3D3D3D] mb-5" />
            <p className="flex items-center ">
              <Icon
                icon="material-symbols:map-sharp"
                className="text-gray-200 font-bold mr-2"
              />
              183 Dhaka, Narayangnaj
            </p>
            <p className="flex items-center cursor-pointer">
              <Icon
                icon="material-symbols:call"
                className="text-gray-200 font-bold mr-2"
              />
              (+880) 01303 384414
            </p>
            <p className="flex items-center cursor-pointer">
              <Icon
                icon="material-symbols:mail-outline-rounded"
                className="text-gray-200 font-bold mr-2"
              />
              EDULearn@gmail.com
            </p>
          </div>
          <div className=" ">
            <h5 className="text-[#fff] font-bold mb-5">EXTRA LINKS</h5>
            <hr className="border border-[#3D3D3D] mb-4" />
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              Features
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              Support
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              Services
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              History
            </p>
            <p className="my-3 hover:brand2 hover:translate-x-1 duration-300 cursor-pointer">
              Dealers
            </p>
          </div>
          <div className=" ">
            <h5 className="text-[#fff] font-bold mb-5">NEWS LETTER</h5>
            <hr className="border border-[#3D3D3D] mb-9" />
            <form>
              <input
                type="text"
                placeholder="Enter your email"
                className="py-3 px-5 w-full rounded"
              />
              <button
                className="bg-brand2 hover-effect px-10 py-4 my-5 text-sm font-bold text-[#fff] hover:-translate-x-1 duration-300 ease-out rounded w-full"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
        <hr className="mt-10" />
        <p className="mt-5 text-center">
          &copy; 2023 All Rights Reserved by EDULearn
        </p>
      </div>
    </div>
  );
};

export default Footer;
