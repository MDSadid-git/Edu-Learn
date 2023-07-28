import React from "react";
import useTitle from "../../Hook/Hook";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import product1 from "../../Assist/products/product1.jpg";
import product2 from "../../Assist/products/product2.jpg";
import product3 from "../../Assist/products/product3.png";
import product4 from "../../Assist/products/product4.png";
import product5 from "../../Assist/category/lunchBox.jpg";
import product6 from "../../Assist/category/lunchBox-2.jpg";
import product7 from "../../Assist/category/lunchBox-3.jpg";
import product8 from "../../Assist/category/pencilBox.jpg";
import product9 from "../../Assist/category/pencilBox-2.jpg";
const Catagory = () => {
  useTitle("Category");

  return (
    <div>
      {/* Banner */}
      <div className="h-[350px] subBackground">
        <div className="bg-[#b4ffff] h-[350px] bg-opacity-70">
          <div className="flex justify-center text-center h-[350px] items-center text-white">
            <div>
              <h1 className="text-5xl text-brand2 font-bold">
                Find Best Products
              </h1>
              <p className="md:text-lg flex items-center justify-center font-bold p-4 text-brand2 text-base">
                <Link
                  to={"/"}
                  className="group-hover:-translate-x-1 duration-300"
                >
                  <span>Home</span>
                </Link>
                <Icon icon="mdi:slash-forward" className="mx-2" />
                <span className="text-white">Products</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section */}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h1 className="font-bold text-gray-600 text-4xl">
              Best Collection
            </h1>
          </header>
          {/* input field  */}
          <div className="flex justify-between items-center mt-2">
            <div>
              <p>Showing 1-4 of 14 results</p>
            </div>
            <div className="flex">
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-400 group-hover:border-brand px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="All">All</option>
                  <option className="group-hover:bg-brand">Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
              </div>

              <div className="relative mx-1">
                <select className="block appearance-none w-full bg-white border border-gray-400 group-hover:border-brand px-4 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline shadow-lg">
                  <option value="Select order">Select order</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Cards  */}
          <div className="mt-5 mx-auto">
            <div className="grid lg:grid-cols-4  sm:grid-cols-2 gap-4">
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product1}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product2}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product6}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product7}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <header>
            <h1 className="font-bold text-gray-600 text-4xl">All Products</h1>
          </header>
          {/* input field  */}
          <div className="flex justify-between items-center mt-2">
            <div>
              <p>Showing 1-12 of 24 results</p>
            </div>
            <div className="flex">
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-400 group-hover:border-brand px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="All">All</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
              </div>

              <div className="relative mx-1">
                <select className="block appearance-none w-full bg-white border border-gray-400 group-hover:border-brand px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="Select order">Select order</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Cards  */}
          <div className="mt-5 mx-auto">
            <div className="grid lg:grid-cols-4  sm:grid-cols-2 gap-4">
              {/* 1st card */}
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product9}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd card */}
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product5}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product3}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product4}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product8}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product1}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product4}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product3}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product4}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product3}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product1}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group  p-4 w-full group-hover:border group-hover:border-brand border rounded-lg">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  href="/"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover group-hover:scale-110 duration-300 object-center w-full h-full block"
                    src={product2}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1 p-1 rounded-xl bg-brand2 inline-block">
                    CATEGORY
                  </h3>
                  <h2 className="text-brand title-font text-lg font-bold ">
                    The Catalyzer
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="mt-1">
                      Price: <span className="text-gray-400">$16.15</span>
                    </p>
                    <div className="lg:opacity-0 opacity-100 group-hover:opacity-100 duration-300 ease-in transform group-hover:translate-x-2">
                      <Icon
                        className="cursor-pointer text-brand"
                        icon="ic:outline-shopping-cart"
                        width={"25px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagination my-20">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catagory;
