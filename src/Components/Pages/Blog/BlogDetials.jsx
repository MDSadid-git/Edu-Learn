import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/Hook";

const BlogDetials = () => {
  useTitle("Blog Details");
  const paraGraph =
    "Education is an integral part of peoples lives it will either make them or break them in the prospect depending on their careers. Education is broadly diverse today compared to the 1950s because of progressions in teaching methods and other prominent inventions that implement more apparent teaching techniques. In E - learning, the students study from home or any other place, that is most convenient for them.They can acquire learning material online.The study materials in online education could be texts, audio, notes, videos, and images.However, the method of study has its benefits and various drawbacks too.Online education is suitable for those who can not visit or obtain the traditional education method for one reason or the other.Nearly 6.1 million college students are currently attending online courses, and this number is growing by around 30 percent yearly.Online education provides a myriad of advantages for people, as well as companies because it allows for, among others, flexibility.A great way to benefit more from online education is to consolidate online education and traditional ways of teaching";

  const [seeMore, setSeeMore] = useState(false);
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
            Blog
          </h1>
          <p className="md:text-lg flex items-center font-bold p-4 text-brand2 text-base">
            <Link to={"/"} className="hover:-translate-x-1 duration-300">
              <span>Home</span>
            </Link>
            <Icon icon="mdi:slash-forward" className="mx-2" />
            Single Blog
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col-reverse max-w-screen-xl mx-auto mt-5 md:mt-10">
        {/* comment sections */}
        <div className="p-5 space-y-4 lg:w-1/4 md:w-4/12">
          <h1 className="text-xl font-bold border-b text-brand">
            User's Comments
          </h1>
          {/* <p className='text-red-500'>No Comments yet</p> */}
          {/* User comments looks like */}
          <div className="h-auto cursor-pointer shadow p-5 md:p-4 bg-slate-50 rounded-xl text-xs md:hover:shadow-2xl">
            <div className="flex justify-between items-center border-b">
              <div className="flex items-center space-x-1">
                <img
                  src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
                  alt="profile-pic"
                  className="h-8 w-12 rounded-full"
                />
                <div>
                  <h1 className="font-bold">Tom Holland</h1>
                  <p>
                    Rating: <span className="font-bold">4</span>
                  </p>
                </div>
              </div>
              <div className="opacity-60">
                <p>12/12/2022</p>
                <p>08:14:02 AM</p>
              </div>
            </div>
            <p className="text-sm">
              This blog helps a lot to understand about new bag design{" "}
            </p>
          </div>
          <div className="h-auto cursor-pointer shadow p-5 md:p-4 bg-slate-50 rounded-xl text-xs md:hover:shadow-2xl">
            <div className="flex justify-between items-center border-b">
              <div className="flex items-center space-x-1">
                <img
                  src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
                  alt="profile-pic"
                  className="h-8 w-12 rounded-full"
                />
                <div>
                  <h1 className="font-bold">Tom Holland</h1>
                  <p>
                    Rating: <span className="font-bold">4</span>
                  </p>
                </div>
              </div>
              <div className="opacity-60">
                <p>12/12/2022</p>
                <p>08:14:02 AM</p>
              </div>
            </div>
            <p className="text-sm">
              This blog helps a lot to understand about new bag design{" "}
            </p>
          </div>
          <div className="h-auto cursor-pointer shadow p-5 md:p-4 bg-slate-50 rounded-xl text-xs md:hover:shadow-2xl">
            <div className="flex justify-between items-center border-b">
              <div className="flex items-center space-x-1">
                <img
                  src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
                  alt="profile-pic"
                  className="h-8 w-12 rounded-full"
                />
                <div>
                  <h1 className="font-bold">Tom Holland</h1>
                  <p>
                    Rating: <span className="font-bold">4</span>
                  </p>
                </div>
              </div>
              <div className="opacity-60">
                <p>12/12/2022</p>
                <p>08:14:02 AM</p>
              </div>
            </div>
            <p className="text-sm">
              This blog helps a lot to understand about new bag design{" "}
            </p>
          </div>

          <p className="text-brand2">Give a comment about this blog</p>

          <div className="">
            <form action="" className="">
              <div className="border-2 rounded-lg">
                <label className="sr-only" for="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="4"
                  id="message"
                ></textarea>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div>
                  <p>Ratings:</p>
                </div>

                <select className="px-2 border rounded-full md:w-full">
                  <option value="Select rating">Select Rating</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-brand hover:bg-brand2 px-5 py-3 font-medium text-white md:w-auto"
                >
                  Submit Your Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Details section */}
        <div className="p-5 space-y-3 lg:w-3/4 md:w-8/12">
          <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-[#003262]">
            Title About The Blog
          </h1>

          <div className="flex-cols md:flex justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-5 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Icon icon="gg:profile"></Icon>
              </div>
              <p>
                Author:{" "}
                <span className="bg-brand2 text-white px-3 pt-1 pb-1 rounded-full text-sm hover:bg-brand">
                  james morgan
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-2 md:mt-0 opacity-50">
              <Icon icon="uiw:date"></Icon>
              <p className="">Published: 12/12/2022</p>
            </div>
          </div>
          <div className="lg:flex flex flex-col-reverse lg:flex-row">
            <p className="lg:w-2/4 overflow-hidden">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin
              sartorial venmo tbh hot chicken gentrify portland.Raclette
              knausgaard hella meggs normcore williamsburg enamel pin sartorial
              venmo tbh hot chicken gentrify portland.Raclette knausgaard hella
              meggs normcore williamsburg enamel pin sartorial venmo tbh hot
              chicken gentrify portland.Raclette knausgaard hella meggs normcore
              williamsburg enamel pin sartorial venmo tbh hot chicken gentrify
              portland.
            </p>
            <div className="rounded-lg h-64 overflow-hidden lg:w-2/4 mb-4 lg:mb-0">
              <img
                alt="content"
                className="w-full hover:scale-110 duration-500"
                src="https://media.glamourmagazine.co.uk/photos/6454d719bf0b24886c38f35a/16:9/w_2560%2Cc_limit/LUGGAGE%2520050523.jpg"
              />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl text-brand underline">
              Full Description:
            </h1>
            <p>
              {seeMore ? paraGraph : `${paraGraph.substring(0, 450)}....`}
              <button
                className="text-blue-500 mx-2"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? (
                  <p className="flex group items-center">
                    Show less
                    <Icon
                      className="text-xl mt-1 mx-2 group-hover:translate-x-[-10px] duration-500"
                      icon="mdi:arrow-left"
                    ></Icon>
                  </p>
                ) : (
                  <p className="flex group items-center">
                    Show more
                    <Icon
                      className="text-xl mt-1 group-hover:translate-x-2 duration-500"
                      icon="mdi:arrow-right"
                    ></Icon>
                  </p>
                )}{" "}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetials;
