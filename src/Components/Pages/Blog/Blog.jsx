import React from "react";
import blogImage from "../../Assist/teacher/teacher (5).jpg";
import blogImage2 from "../../Assist/teacher/teacher (2).jpg";
import blogImage3 from "../../Assist/teacher/teacher (3).jpg";
import blogImage4 from "../../Assist/teacher/teacher (4).jpg";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/Hook";
import { Icon } from "@iconify/react";
const Blog = () => {
  useTitle("Blog");
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#abe0ff] to-brand cover-full">
        <h1 className="pt-16 text-center font-bold lg:text-5xl md:text-3xl text-xl mb-5 text-white">
          Blog Details
        </h1>
        <p className="flex justify-center items-center max-w-lg font-bold mx-auto text-center  pb-16 text-gray-900 text-lg">
          <Link to={"/"} className="hover:-translate-x-1 duration-300">
            <span>Home</span>
          </Link>
          <Icon icon="mdi:slash-forward" className="mx-2" />
          Blog Details
        </p>
      </div>
      <section className="max-w-screen-xl bg-white container mx-auto">
        <div
          className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
        max-w-7xl"
        >
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
              From the blog
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              <article className="flex bg-white transition hover:shadow-xl group rounded-lg border-2 border-brand2 hover:border-brand">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-brand2"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>May 10</span>
                  </time>
                </div>

                <div className=" sm:basis-56">
                  <img
                    alt="Guitar"
                    src={blogImage}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between rounded-lg z-10">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="/bloggrid">
                      <h3 className="font-bold uppercase text-brand">
                        Improving your Skill to the MAX
                      </h3>
                    </a>
                    <div>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, pos
                      </p>
                      <p className="group-hover:translate-x-5 duration-500 ">
                        <Icon
                          icon="ic:outline-arrow-right-alt"
                          width={"25"}
                          className="text-brand2"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end ">
                    <Link to="/bloggrid">
                      <button className="w-full text-center duration-500 group-hover:bg-brand bg-brand2 px-5 py-3  text-xs font-bold uppercase text-white transition">
                        Read Blog
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="flex bg-white transition hover:shadow-xl group rounded-lg border-2 border-brand2 hover:border-brand">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-brand2"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>May 10</span>
                  </time>
                </div>

                <div className=" sm:basis-56">
                  <img
                    alt="Guitar"
                    src={blogImage2}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between rounded-lg z-10">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="/bloggrid">
                      <h3 className="font-bold uppercase text-brand">
                        Improving your Skill to the MAX
                      </h3>
                    </a>
                    <div>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, pos
                      </p>
                      <p className="group-hover:translate-x-5 duration-500 ">
                        <Icon
                          icon="ic:outline-arrow-right-alt"
                          width={"25"}
                          className="text-brand2"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end ">
                    <Link to="/bloggrid">
                      <button className="w-full text-center duration-500 group-hover:bg-brand bg-brand2 px-5 py-3  text-xs font-bold uppercase text-white transition">
                        Read Blog
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="flex bg-white transition hover:shadow-xl group rounded-lg border-2 border-brand2 hover:border-brand">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-brand2"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>May 10</span>
                  </time>
                </div>

                <div className=" sm:basis-56">
                  <img
                    alt="Guitar"
                    src={blogImage3}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between rounded-lg z-10">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="/bloggrid">
                      <h3 className="font-bold uppercase text-brand">
                        Improving your Skill to the MAX
                      </h3>
                    </a>
                    <div>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, pos
                      </p>
                      <p className="group-hover:translate-x-5 duration-500 ">
                        <Icon
                          icon="ic:outline-arrow-right-alt"
                          width={"25"}
                          className="text-brand2"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end ">
                    <Link to="/bloggrid">
                      <button className="w-full text-center duration-500 group-hover:bg-brand bg-brand2 px-5 py-3  text-xs font-bold uppercase text-white transition">
                        Read Blog
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="flex bg-white transition hover:shadow-xl group rounded-lg border-2 border-brand2 hover:border-brand">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-brand2"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>May 10</span>
                  </time>
                </div>

                <div className=" sm:basis-56">
                  <img
                    alt="Guitar"
                    src={blogImage4}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between rounded-lg z-10">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="/bloggrid">
                      <h3 className="font-bold uppercase text-brand">
                        Improving your Skill to the MAX
                      </h3>
                    </a>
                    <div>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, pos
                      </p>
                      <p className="group-hover:translate-x-5 duration-500 ">
                        <Icon
                          icon="ic:outline-arrow-right-alt"
                          width={"25"}
                          className="text-brand2"
                        />
                      </p>
                    </div>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end ">
                    <Link to="/bloggrid">
                      <button className="w-full text-center duration-500 group-hover:bg-brand bg-brand2 px-5 py-3  text-xs font-bold uppercase text-white transition">
                        Read Blog
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="pagination mt-10">
              <button className="btn-nav left-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="left-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="right-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
