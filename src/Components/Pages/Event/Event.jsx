import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/Hook";
const Event = () => {
  useTitle("Events");
  return (
    <>
      <div className="h-[350px] subBackground">
        <div className="bg-[#b4ffff] h-[350px] bg-opacity-70">
          <div className="flex justify-center text-center h-[350px] items-center text-white">
            <div>
              <h1 className="md:text-5xl text-3xl text-brand2 font-bold">
                Find Best Events
              </h1>
              <p className="md:text-lg flex items-center justify-center font-bold p-4 text-brand2 text-base">
                <Link
                  to={"/"}
                  className="group-hover:-translate-x-1 duration-300"
                >
                  <span>Home</span>
                </Link>
                <Icon icon="mdi:slash-forward" className="mx-2" />
                <span className="text-white">Events</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-3xl mb-5 text-gray-800 capitalize lg:text-4xl font-bold">
          All Events<span className=" text-brand rounded text-6xl">.</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 b">
          {/* card design started */}

          <div className="h-64 shadow rounded-xl group cursor-pointer hover:shadow-2xl relative duration-500 p-2 bg-slate-50 overflow-hidden">
            <div
              className="w-full h-36 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://educationusa.state.gov/sites/default/files/styles/content_area_full_width/public/wysiwyg/istock_000037424000_double.jpg?itok=oNsJZRcp)",
              }}
            >
              <div className="flex justify-between p-4 duration-500">
                <p className="text-brand bg-slate-100 px-4 rounded-xl hover:bg-brand absolute top-[-120px] group-hover:top-4 duration-500 hover:text-white">
                  Free
                </p>
                <div className="flex space-x-3 absolute right-[-300px] group-hover:right-8 duration-500">
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="material-symbols:share"
                  />
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="mdi:cards-heart"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2 p-4">
              <div className="w-2/12 font-bold">
                <p>SEP</p>
                <p className=" text-brand">17</p>
              </div>
              <div className="w-10/12">
                <h1 className="font-bold text-brand">Basic HTML and CSS</h1>
                <p className="text-sm">Learn about how HTML and CSS Works</p>
              </div>
            </div>
          </div>
          <div className="h-64 shadow rounded-xl relative group cursor-pointer hover:shadow-2xl duration-500 p-2 bg-slate-50 overflow-hidden">
            <div
              className="w-full h-36 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/02122118/samuel-pereira-uf2nnANWa8Q-unsplash-min-scaled.jpg)",
              }}
            >
              <div className="flex justify-between p-4 ">
                <p className="text-brand bg-slate-100 px-4 rounded-xl hover:bg-brand hover:text-white absolute top-[-120px] group-hover:top-4 duration-500">
                  Free
                </p>
                <div className="flex space-x-3 absolute right-[-300px] group-hover:right-8 duration-500">
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="material-symbols:share"
                  />
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="mdi:cards-heart"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2 p-4">
              <div className="w-2/12 font-bold">
                <p>SEP</p>
                <p className=" text-brand">17</p>
              </div>
              <div className="w-10/12">
                <h1 className="font-bold text-brand">Basic HTML and CSS</h1>
                <p className="text-sm">Learn about how HTML and CSS Works</p>
              </div>
            </div>
          </div>
          <div className="h-64 shadow rounded-xl relative group cursor-pointer hover:shadow-2xl duration-500 p-2 bg-slate-50 overflow-hidden">
            <div
              className="w-full h-36 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://cdn.uniacco.com/blog/wp-content/uploads/2021/06/02122221/stem-list-EVgsAbL51Rk-unsplash1-min-1024x576.jpg)",
              }}
            >
              <div className="flex justify-between p-4 ">
                <p className="text-brand bg-slate-100 px-4 rounded-xl hover:bg-brand hover:text-white absolute top-[-120px] group-hover:top-4 duration-500">
                  Free
                </p>
                <div className="flex space-x-3 absolute right-[-300px] group-hover:right-8 duration-500">
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="material-symbols:share"
                  />
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="mdi:cards-heart"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2 p-4">
              <div className="w-2/12 font-bold">
                <p>SEP</p>
                <p className=" text-brand">17</p>
              </div>
              <div className="w-10/12">
                <h1 className="font-bold text-brand">Basic HTML and CSS</h1>
                <p className="text-sm">Learn about how HTML and CSS Works</p>
              </div>
            </div>
          </div>
          <div className="h-64 shadow rounded-xl relative group cursor-pointer hover:shadow-2xl duration-500 p-2 bg-slate-50 overflow-hidden">
            <div
              className="w-full h-36 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://www.conference2go.com/wp-content/uploads/2021/04/education-2.png)",
              }}
            >
              <div className="flex justify-between p-4 ">
                <p className="text-brand bg-slate-100 px-4 rounded-xl hover:bg-brand hover:text-white absolute top-[-120px] group-hover:top-4 duration-500">
                  Free
                </p>
                <div className="flex space-x-3 absolute right-[-300px] group-hover:right-8 duration-500">
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="material-symbols:share"
                  />
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="mdi:cards-heart"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2 p-4">
              <div className="w-2/12 font-bold">
                <p>SEP</p>
                <p className=" text-brand">17</p>
              </div>
              <div className="w-10/12">
                <h1 className="font-bold text-brand">Basic HTML and CSS</h1>
                <p className="text-sm">Learn about how HTML and CSS Works</p>
              </div>
            </div>
          </div>
          <div className="h-64 shadow rounded-xl relative group cursor-pointer hover:shadow-2xl duration-500 p-2 bg-slate-50 overflow-hidden">
            <div
              className="w-full h-36 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli68tC4eqBqHvQc8XPx9JMXBL4TR3Di3abw&usqp=CAU)",
              }}
            >
              <div className="flex justify-between p-4 ">
                <p className="text-brand bg-slate-100 px-4 rounded-xl hover:bg-brand hover:text-white absolute top-[-120px] group-hover:top-4 duration-500">
                  Free
                </p>
                <div className="flex space-x-3 absolute right-[-300px] group-hover:right-8 duration-500">
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="material-symbols:share"
                  />
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="mdi:cards-heart"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2 p-4">
              <div className="w-2/12 font-bold">
                <p>SEP</p>
                <p className=" text-brand">17</p>
              </div>
              <div className="w-10/12">
                <h1 className="font-bold text-brand">Basic HTML and CSS</h1>
                <p className="text-sm">Learn about how HTML and CSS Works</p>
              </div>
            </div>
          </div>
          <div className="h-64 shadow rounded-xl relative group cursor-pointer hover:shadow-2xl duration-500 p-2 bg-slate-50 overflow-hidden">
            <div
              className="w-full h-36 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9QCy4XNqKISj1i45orZGTu9o0zLZUcr77A&usqp=CAU)",
              }}
            >
              <div className="flex justify-between p-4 ">
                <p className="text-brand bg-slate-100 px-4 rounded-xl hover:bg-brand hover:text-white absolute top-[-120px] group-hover:top-4 duration-500">
                  Free
                </p>
                <div className="flex space-x-3 absolute right-[-300px] group-hover:right-8 duration-500">
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="material-symbols:share"
                  />
                  <Icon
                    className="text-brand bg-slate-100 rounded-full p-1 hover:scale-125 scale-100"
                    width="25px"
                    icon="mdi:cards-heart"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2 p-4">
              <div className="w-2/12 font-bold">
                <p>SEP</p>
                <p className=" text-brand">17</p>
              </div>
              <div className="w-10/12">
                <h1 className="font-bold text-brand">Basic HTML and CSS</h1>
                <p className="text-sm">Learn about how HTML and CSS Works</p>
              </div>
            </div>
          </div>

          {/* card design ended */}
        </div>
        <div className="pagination mt-8">
          <button className="btn-nav left-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="left-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="page-numbers">
            <button className="btn-page">1</button>
            <button className="btn-page">2</button>
            <button className="btn-page btn-selected">3</button>

            <span className="dots">...</span>
            <button className="btn-page">23</button>
          </div>
          <button className="btn-nav right-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="right-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Event;
