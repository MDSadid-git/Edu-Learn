import React from "react";


const CourseCategory = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="text-center font-poppins-em py-16 px-5 md:px-0">
        <h3 className="text-md text-brand font-semibold  pb-5">
          START LEARNING TODAY
        </h3>
        <h1 className="text-3xl font-bold  pb-8">Register a Course</h1>
        <p className="text-xs text-black/90">
          “The more that you read, the more things you will know.
          <br /> The more that you learn, the more places you'll go.”
        </p>
      </div>

      {/* pic a course card section start  */}
      <div className="grid grid-cols-2 mx-3 md:grid-cols-4 gap-5 text-white">
        {/* part one  */}
        <div className="">
          <div className="p-5 text-white font-bold border bg-gradient-to-br hover:to-indigo-800 from-indigo-400 to-indigo-600 rounded-lg bg-black h-48">
            <h1 className="text-lg">Programming</h1>
            <h1 className="text-sm">22 Courses</h1>
          </div>

          <div className="p-5 mt-5 border bg-gradient-to-br hover:to-orange-800 from-orange-400 to-orange-600 text-white font-bold rounded-lg bg-black  h-36">
            <h1 className="text-lg">Music</h1>
            <h1 className="text-sm">9 Courses</h1>
          </div>
        </div>
        {/* part two   */}
        <div className="">
          <div className="p-5 border bg-gradient-to-br hover:to-emerald-800 from-emerald-400 to-emerald-600 text-white font-bold rounded-lg bg-black  h-36">
            <h1 className="text-lg">Development</h1>
            <h1 className="text-sm">29 Courses</h1>
          </div>

          <div className="p-5 mt-5 border bg-gradient-to-br hover:to-blue-800 from-blue-400 to-blue-600 text-white font-bold rounded-lg bg-black  h-48">
            <h1 className="text-lg">Gaming</h1>
            <h1 className="text-sm">15 Courses</h1>
          </div>
        </div>
        {/* part three  */}
        <div className="">
          <div className="p-5 mb-5 border bg-gradient-to-br hover:to-blue-800 from-violet-400 to-blue-600 text-white font-bold rounded-lg bg-black  h-48">
            <h1 className="text-lg">Photography</h1>
            <h1 className="text-sm">25 Courses</h1>
          </div>

          <div className="p-5 my-5 border bg-gradient-to-br hover:to-rose-800 from-rose-400 to-rose-600 text-white font-bold rounded-lg bg-black  h-36">
            <h1 className="text-lg">Business</h1>
            <h1 className="text-sm">29 Courses</h1>
          </div>
        </div>
        {/* part four  */}
        <div className="">
          <div className="p-5 mb-5 border bg-gradient-to-br hover:to-green-800 from-green-400 to-green-600 text-white font-bold rounded-lg bg-black  h-36">
            <h1 className="text-lg">Design</h1>
            <h1 className="text-sm">23 Courses</h1>
          </div>

          <div className="p-5 my-5 border bg-gradient-to-br hover:to-pink-800 from-purple-400 to-pink-600 text-white font-bold rounded-lg bg-black  h-48">
            <h1 className="text-lg">Health</h1>
            <h1 className="text-sm">31 Courses</h1>
          </div>
        </div>
      </div>

      {/* pic a course card section end  */}
    </div>
  );
};

export default CourseCategory;
