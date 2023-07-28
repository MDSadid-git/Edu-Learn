import React from "react";
import Lottie from "lottie-react";
import contact from "./75663-call-center-support-lottie-animation.json";
import mailImage from "../../Assist/icons/mail.png";
import callImage from "../../Assist/icons/location.png";
import locationImage from "../../Assist/icons/phone.png";
import MapWorld from "../Map/MapWorld";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/Hook";
import service1 from '../../Assist/images/service1.jpg'

const Contact = () => {
  useTitle("Contact");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, message);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto min-h-screen pt-10">
        <div className="flex-1 w-full">
          <Lottie className="text-brand2" animationData={contact}></Lottie>
        </div>
        <div className="flex-1 w-full mt-10 p-2">
          <form onSubmit={handleSubmitForm}>
            <div>
              <h1 className="uppercase text-xl mb-4 text-brand2 font-bold">
                Contact Us
              </h1>
            </div>
            <div className="flex">
              <div className="w-[50%]">
                <span className="uppercase block text-left text-sm text-brand2 font-bold">
                  Full Name
                </span>
                <input
                  name="name"
                  className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  type="text"
                />
              </div>
              <div className="w-[50%] ml-3">
                <span className="uppercase block text-left text-sm text-brand2 font-bold">
                  Number
                </span>
                <input
                  name="name"
                  className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight   focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  type="number"
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm block text-left text-brand2 font-bold">
                Email
              </span>
              <input
                name="email"
                className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight   focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                type="email"
              />
            </div>
            <div className="mt-4">
              <span className="uppercase text-sm block text-left text-brand2 font-bold">
                Message
              </span>
              <textarea
                name="message"
                className="shadow form-textarea mt-1 block border rounded w-full h-40 py-2 px-3 bg-gray-300 text-gray-700 leading-tight   focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="uppercase text-sm font-bold tracking-wide hover:bg-brand duration-300 bg-brand2 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-16">
        <Link
          href="https://goo.gl/maps/g94H8WE9VCS4yzoXA"
          target="_blank"
          className="group m-2"
        >
          <div className="flex items-center border border-white group-hover:border-brand2 duration-300 gap-4  bg-white shadow py-10 px-5 rounded-lg brand">
            <p className="bg-brand2 rounded-lg ">
              <img src={locationImage} alt="" className="w-16 h-16  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold text-brand2">Our Address</h1>
              <p className="text-lg font-semibold text-gray-500">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </Link>
        {/* tel:+4733378901" */}
        <Link href="tel:+88 01303 384414" className="group m-2">
          <div className="flex items-center gap-4 border border-white group-hover:border-brand2 duration-300 bg-white shadow py-10 px-5 rounded-lg brand">
            <p className="bg-brand2 rounded-lg ">
              <img src={callImage} alt="" className="w-16 h-16  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold text-brand2">Our Phone</h1>
              <p className="text-lg font-semibold text-gray-500">
                +88 01303 384414{" "}
              </p>
            </div>
          </div>
        </Link>
        <Link href="mailto: abc@example.com" className="group m-2">
          <div className="flex items-center border border-white group-hover:border-brand2 duration-300 gap-4 bg-white shadow py-10 px-5 rounded-lg brand">
            <p className="bg-brand2 rounded-lg ">
              <img src={mailImage} alt="" className="w-16 h-16  p-3" />
            </p>
            <div>
              <h1 className="text-3xl font-bold px-5 text-brand2">Our Email</h1>
              <p className="text-lg font-semibold text-gray-500">
                letstalk@weerodigital.com
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className=" max-w-screen-xl mx-auto min-h-screen">
        <MapWorld />
      </div>
      <div className="h-96">
        <div className="h-full border bg-cover w-full bg-no-repeat" style={{
          backgroundImage: `url(${service1})`, height: "384px"
        }}>

        </div>
      </div>
    </div>
  );
};

export default Contact;
