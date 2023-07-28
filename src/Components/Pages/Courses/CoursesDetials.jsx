import React from "react";
import { Icon } from "@iconify/react";
import coursesImg from "../../Assist/course-category/health.jpg";
import course2 from "../../Assist/course-category/developemnt.jpg";
import course3 from "../../Assist/course-category/business.jpg";
import course4 from "../../Assist/course-category/music.jpg";
import course5 from "../../Assist/course-category/programming.jpg";
import course6 from "../../Assist/course-category/photography.jpg";
import course7 from "../../Assist/course-category/health.jpg";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/Hook";

const CoursesDetials = () => {
  useTitle("Course Details");
  function scrool() {
    return window.scrollTo(0, 0);
  }
  scrool();
  return (
    <div
      className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
        max-w-7xl"
    >
      <div className="flex flex-col items-center sm:px-5 md:flex-row justify-center pt-20 mx-auto">
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
              className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-[#003262]"
            >
              Write anything. Be creative.
            </a>
            <div className="pt-2 pr-0 pb-0 pl-0">
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                animi quam dolorum, facere in rerum unde consequuntur assumenda
                sapiente ad incidunt, cupiditate repellendus tempore enim quidem
                veritatis tenetur ullam, dolore expedita. Laudantium facere
                consectetur iure! Vitae repellendus quasi dolor laborum in!
                Eveniet optio non corporis asperiores, laborum aliquam ad rerum!
              </p>
            </div>
            <div className="flex justify-around items-center">
              <button className="bg-brand my-5 duration-300 py-2 px-6 rounded-xl hover:bg-brand2">
                <Link title="Cart" to="/cart">
                  <Icon
                    icon="ic:outline-shopping-cart"
                    className=" text-white"
                    width="25px"
                  />
                </Link>
              </button>
              <div className="flex">
                <button className="ml-5">
                  <Icon icon="ps:lovedsgn" className="text-[#FF0000]" />
                </button>
                <span className="mx-2">Add to wishlist</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="block">
            <img src={coursesImg} alt="/" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
      <div className="w-full m-auto">
        <div className=" text-brand max-w-5xl mx-auto">
          <div className="flex justify-center items-start gap-3 px-4 mx-auto md:p-8 w-full">
            <div>
              <h1 className="text-xl font-bold">Course Content</h1>

              <div className="accordion flex flex-col items-center justify-center">
                {/*  Panel 1  */}
                <div className="mt-10 w-full">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-1"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-1"
                    className="label relative block bg-gray-100 hover:bg-brand cursor-pointer hover:text-white transition duration-300 text-brand p-4 shadow border-b border-grey font-bold"
                  >
                    <div className="flex justify-between">
                      <div className="py-3">
                        <div className="mx-2">
                          <h1>Chapter 1</h1>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon
                          icon="material-symbols:arrow-circle-right-outline-rounded"
                          width={"25px"}
                        />
                      </div>
                    </div>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <div className="flex justify-between">
                      <div className="flex items-center py-3 cursor-pointer">
                        <div className="py-4 mx-2">
                          <Icon
                            icon="ic:baseline-slow-motion-video"
                            width={"25px"}
                          />
                        </div>
                        <h1>Class 1</h1>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <Icon icon="material-symbols:lock" width={"25px"} />
                        </div>
                        <h1 className="mr-3">Time:10.00 </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Panel 2 */}
                <div className="w-full">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-2"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-2"
                    className="label relative block bg-gray-100 hover:bg-brand hover:text-white transition duration-300 p-4 shadow border-b border-grey font-bold"
                  >
                    <div className="flex justify-between">
                      <div className="py-3">
                        <div className="mx-2">
                          <h1>Chapter 2</h1>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon
                          icon="material-symbols:arrow-circle-right-outline-rounded"
                          width={"25px"}
                        />
                      </div>
                    </div>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <div className="flex justify-between">
                      <div className="flex items-center py-3 cursor-pointer">
                        <div className="py-4 mx-2">
                          <Icon
                            icon="ic:baseline-slow-motion-video"
                            width={"25px"}
                          />
                        </div>
                        <h1>Class 1</h1>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <Icon icon="material-symbols:lock" width={"25px"} />
                        </div>
                        <h1 className="mr-3">Time:10.00 </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Panel 3  */}
                <div className="w-full">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-3"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-3"
                    className=" label relative block bg-gray-100 hover:bg-brand hover:text-white transition duration-300  p-4 shadow border-b border-grey font-bold"
                  >
                    <div className="flex justify-between">
                      <div className="py-3">
                        <div className="mx-2">
                          <h1>Chapter 3</h1>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon
                          icon="material-symbols:arrow-circle-right-outline-rounded"
                          width={"25px"}
                        />
                      </div>
                    </div>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <div className="flex justify-between">
                      <div className="flex items-center py-3 cursor-pointer">
                        <div className="py-4 mx-2">
                          <Icon
                            icon="ic:baseline-slow-motion-video"
                            width={"25px"}
                          />
                        </div>
                        <h1>Class 1</h1>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <Icon icon="material-symbols:lock" width={"25px"} />
                        </div>
                        <h1 className="mr-3">Time:10.00 </h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Panel 4  */}
                <div className="w-full">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-4"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-4"
                    className="label relative block bg-gray-100 hover:bg-brand hover:text-white transition duration-300  p-4 shadow border-b border-grey font-bold"
                  >
                    <div className="flex justify-between">
                      <div className="py-3">
                        <div className="mx-2">
                          <h1>Chapter 4</h1>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon
                          icon="material-symbols:arrow-circle-right-outline-rounded"
                          width={"25px"}
                        />
                      </div>
                    </div>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 className="accordion__header pt-4 pl-4 font-bold text-brand">
                      Comming
                    </h2>
                    <p className="accordion__body p-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto possimus at a cum saepe molestias modi illo facere
                      ducimus voluptatibus praesentium deleniti fugiat ab error
                      quia sit perspiciatis velit necessitatibus.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white container mx-auto duration-300">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="flex bg-white transition border-2 hover:border-brand cursor-pointer group">
            <div className=" sm:basis-56 over overflow-hidden">
              <img
                alt="Guitar"
                src={course7}
                className="aspect-square h-full w-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-lg">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="/bloggrid">
                  <h3 className="font-bold uppercase text-gray-900 flex items-center gap-2">
                    Improving Skill <Icon icon="octicon:dash-16" /> health
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="flex p-4 border-t-[1px]  border-l-[1px]">
                <div className="w-1/2 text-center">
                  <a href="" className="">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-0 border-2 border-brand"></div>
                <div className="w-1/2 text-center ">
                  <span className="text-brand font-bold"> $100</span>
                </div>
                          
              </div>
            </div>
          </div>

          <div className="flex bg-white transition border-2 hover:border-brand cursor-pointer group">
            <div className=" sm:basis-56 over overflow-hidden">
              <img
                alt="Guitar"
                src={course2}
                className="aspect-square h-full w-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-lg">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="/bloggrid">
                  <h3 className="font-bold uppercase text-gray-900 flex items-center gap-2 ">
                    Improving skill <Icon icon="octicon:dash-16" /> Programming
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="flex p-4 border-t-[1px]  border-l-[1px]">
                <div className="w-1/2 text-center">
                  <a href="" className="">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-0 border-2 border-brand"></div>
                <div className="w-1/2 text-center ">
                  <span className="text-brand font-bold"> $100</span>
                </div>
                          
              </div>
            </div>
          </div>

          <div className="group flex bg-white transition border-2 hover:border-brand cursor-pointer">
            <div className=" sm:basis-56 overflow-hidden">
              <img
                alt="Guitar"
                src={course3}
                className="aspect-square h-full w-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-lg">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="/bloggrid">
                  <h3 className="font-bold uppercase text-gray-900 flex items-center gap-2 ">
                    Improving skill <Icon icon="octicon:dash-16" /> business
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="flex p-4 border-t-[1px]  border-l-[1px]">
                <div className="w-1/2 text-center">
                  <a href="" className="">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-0 border-2 border-brand"></div>
                <div className="w-1/2 text-center ">
                  <span className="text-brand font-bold"> $100</span>
                </div>
                          
              </div>
            </div>
          </div>
          <div className="group flex bg-white transition border-2 hover:border-brand cursor-pointer">
            <div className=" sm:basis-56 overflow-hidden">
              <img
                alt="Guitar"
                src={course4}
                className="aspect-square h-full w-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-lg">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="/bloggrid">
                  <h3 className="font-bold uppercase text-gray-900 flex items-center gap-2 ">
                    Improving skill <Icon icon="octicon:dash-16" /> music
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="flex p-4 border-t-[1px]  border-l-[1px]">
                <div className="w-1/2 text-center">
                  <a href="" className="">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-0 border-2 border-brand"></div>
                <div className="w-1/2 text-center ">
                  <span className="text-brand font-bold"> $100</span>
                </div>
                          
              </div>
            </div>
          </div>

          <div className="group flex bg-white transition border-2 hover:border-brand cursor-pointer">
            <div className=" sm:basis-56 overflow-hidden">
              <img
                alt="Guitar"
                src={course5}
                className="aspect-square h-full w-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-lg">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="/bloggrid">
                  <h3 className="font-bold uppercase text-gray-900 flex items-center gap-2 ">
                    Improving skill <Icon icon="octicon:dash-16" /> Coding
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="flex p-4 border-t-[1px]  border-l-[1px]">
                <div className="w-1/2 text-center">
                  <a href="" className="">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-0 border-2 border-brand"></div>
                <div className="w-1/2 text-center ">
                  <span className="text-brand font-bold"> $100</span>
                </div>
                          
              </div>
            </div>
          </div>

          <div className="group flex bg-white transition border-2 hover:border-brand cursor-pointer">
            <div className=" sm:basis-56 overflow-hidden">
              <img
                alt="Guitar"
                src={course6}
                className="aspect-square h-full w-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-lg">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="/bloggrid">
                  <h3 className="font-bold uppercase text-gray-900 flex items-center gap-2 ">
                    Improving skill <Icon icon="octicon:dash-16" /> photography
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="flex p-4 border-t-[1px]  border-l-[1px]">
                <div className="w-1/2 text-center">
                  <a href="" className="">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-0 border-2 border-brand"></div>
                <div className="w-1/2 text-center ">
                  <span className="text-brand font-bold"> $100</span>
                </div>
                          
              </div>
            </div>
          </div>
        </div>
        <div className="pagination mt-7">
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
    </div>
  );
};

export default CoursesDetials;
