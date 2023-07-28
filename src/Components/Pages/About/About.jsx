import React, { useEffect, useState } from "react";
import MainCart from "../MainCart/MainCart";
import MainNavbar from "../../Share/MainNavbar/MainNavbar";
import useTitle from "../../Hook/Hook";
import Testmonial from "../TestMonial/Testmonial";
import AboutState from "./AboutState";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const About = () => {
  useTitle("About");
  const [myData, setMyData] = useState([]);
  function scrool() {
    return window.scrollTo(0, 0);
  }
  scrool();
  useEffect(() => {
    fetch("Courses.json")
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, []);
  return (
    <div>
      <div
        className="bg-no-repeat h-[350px] bg-cover"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/online-education-vector-design-online-school-text-with-laptop-phone-digital-learning-elements_572293-2195.jpg?w=740)",
        }}
      >
        <div className="bg-[#b4ffff] h-[350px] bg-opacity-70 flex flex-col justify-center items-center">
          <h1 className="font-bold lg:text-5xl md:text-3xl text-xl text-brand2">
            About Us
          </h1>
          <p className="md:text-lg flex items-center font-bold p-4 text-brand2 text-base">
            <Link to={"/"} className="hover:-translate-x-1 duration-300">
              <span>Home</span>
            </Link>
            <Icon icon="mdi:slash-forward" className="mx-2" />
            About Us
          </p>
        </div>
      </div>

      <div>
        <section className="mx-auto max-w-6xl py-12">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
              <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
              <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="bg-gradient-to-bl from-brand via-transparent to-brand rounded-lg m-4">
                <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center">
                  <div slot="middle-left" className="max-w-2xl">
                    <div className="flex flex-row">
                      <div className="w-2/3  p-5  rounded-l-lg text-brand2 flex justify-center items-center h-48 text-3xl font-black uppercase">
                        Awesome Edu CREW LEARNING
                      </div>
                      <div className="w-1/3 rounded-r-lg  text-brand2 p-5 flex justify-center items-center">
                        More details about the study can be found in the book ,
                        click to learn more ...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
              </div>
              <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center">
                <div slot="middle-right" className="max-w-xs">
                  <div className="flex flex-col justify-center h-48 p-3">
                    <div className="text-xl font-black text-[#003262]">
                      Awesome discovery we did
                    </div>
                    <div className="text-sm my-3">
                      The results are spectacular, you can checkout the source
                      for more informations
                    </div>
                    <div className="text-sm text-[#003262] cursor-pointer hover:bg-brand2 hover:border-brand2 hover:text-white border-2 border-brand text-center py-2 rounded-lg duration-500 font-bold w-[50%] mx-auto ">
                      Read more
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5 md:flex-row justify-center items-center">
              <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center  mr-0 md:mr-2 hover:scale-110 hover:shadow-xl shadow-brand2 m-5">
                <div
                  slot="bottom-left"
                  className="max-w-xs border-2 border-brand rounded-lg hover:border-brand2 duration-500"
                >
                  <div className="p-5 shadow-md mt-4">
                    <div className="text-xs font-bold uppercase text-brand mt-1 mb-2">
                      Blog post
                    </div>
                    <div className="text-xl font-bold text-brand2 mb-2">
                      Big case study
                    </div>
                    <div className="truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id ut vel facilis iste, dicta est minus alias, aliquam,
                      velit nisi quo assumenda porro dignissimos doloremque
                      temporibus eum saepe aspernatur ab.
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center  mr-0 md:mr-2 hover:scale-110 hover:shadow-xl shadow-brand2 m-5">
                <div
                  slot="bottom-left"
                  className="max-w-xs border-2 border-brand rounded-lg hover:border-brand2 duration-500"
                >
                  <div className="p-5 shadow-md mt-4">
                    <div className="text-xs font-bold uppercase text-brand mt-1 mb-2">
                      Blog post
                    </div>
                    <div className="text-xl font-bold text-brand2 mb-2">
                      Big case study
                    </div>
                    <div className="truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id ut vel facilis iste, dicta est minus alias, aliquam,
                      velit nisi quo assumenda porro dignissimos doloremque
                      temporibus eum saepe aspernatur ab.
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center  mr-0 md:mr-2 hover:scale-110 hover:shadow-xl shadow-brand2 m-5">
                <div
                  slot="bottom-left"
                  className="max-w-xs border-2 border-brand rounded-lg hover:border-brand2 duration-500"
                >
                  <div className="p-5 shadow-md mt-4">
                    <div className="text-xs font-bold uppercase text-brand mt-1 mb-2">
                      Blog post
                    </div>
                    <div className="text-xl font-bold text-brand2 mb-2">
                      Big case study
                    </div>
                    <div className="truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id ut vel facilis iste, dicta est minus alias, aliquam,
                      velit nisi quo assumenda porro dignissimos doloremque
                      temporibus eum saepe aspernatur ab.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutState />
        <Testmonial />
      </div>
    </div>
  );
};

export default About;
