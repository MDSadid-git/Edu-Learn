import React from "react";
import Slider from "react-slick";
import lunchbox from "../../Assist/category/lunchBox.jpg";
import lunchbox2 from "../../Assist/category/lunchBox-2.jpg";
import lunchbox3 from "../../Assist/category/lunchBox-3.jpg";
import lunchbox4 from "../../Assist/category/lunchBox-4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0EB582" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0EB582" }}
      onClick={onClick}
    />
  );
}

const Catagory2Card = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="mx-auto max-w-screen-xl">
      <Slider {...settings}>
        {/* 1 no card */}
        <div className="px-2">
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative ">
              <a href="#">
                <img className="w-full" src={lunchbox} />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-brand px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-brand transition duration-500 ease-in-out  font-bold">
                  Cooking
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto ">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-brand transition duration-500 ease-in-out mb-2"
              >
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className=" items-center justify-between bg-gray-100">
              <button
                className="bg-brand hover:bg-gray-100 hover-effect px-10 py-4 text-sm font-bold text-gray-100  hover:text-brand duration-300 ease-out rounded w-full border border-brand"
                type="submit"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* 2 no card */}
        <div className="px-2">
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative ">
              <a href="#">
                <img className="w-full" src={lunchbox2} />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-brand px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-brand transition duration-500 ease-in-out  font-bold">
                  Cooking
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto ">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-brand transition duration-500 ease-in-out mb-2"
              >
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className=" items-center justify-between bg-gray-100">
              <button
                className="bg-brand hover:bg-gray-100 hover-effect px-10 py-4 text-sm font-bold text-gray-100  hover:text-brand duration-300 ease-out rounded w-full border border-brand"
                type="submit"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        {/* 3 no card */}
        <div className="px-2">
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative ">
              <a href="#">
                <img className="w-full" src={lunchbox3} />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-brand px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-brand transition duration-500 ease-in-out  font-bold">
                  Cooking
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto ">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-brand transition duration-500 ease-in-out mb-2"
              >
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className=" items-center justify-between bg-gray-100">
              <button
                className="bg-brand hover:bg-gray-100 hover-effect px-10 py-4 text-sm font-bold text-gray-100  hover:text-brand duration-300 ease-out rounded w-full border border-brand"
                type="submit"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        {/* 4 no card */}
        <div className="px-2">
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative ">
              <a href="#">
                <img className="w-full" src={lunchbox4} />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-brand px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-brand transition duration-500 ease-in-out  font-bold">
                  Cooking
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto ">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-brand transition duration-500 ease-in-out mb-2"
              >
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className=" items-center justify-between bg-gray-100">
              <button
                className="bg-brand hover:bg-gray-100 hover-effect px-10 py-4 text-sm font-bold text-gray-100  hover:text-brand duration-300 ease-out rounded w-full border border-brand"
                type="submit"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Catagory2Card;
