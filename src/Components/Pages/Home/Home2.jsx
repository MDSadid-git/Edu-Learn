import React from "react";
import Serves from "./Serves/Serves";
import Quality from "./Quality/Quality";
import OurTeacher from "./Teacher/OurTeacher";
import Hero from "./Hero/Hero";
import CourseCategory from "./CourseCategory/CourseCategory";
import useTitle from "../../Hook/Hook";

const Home2 = () => {
  useTitle("Home2");
  return (
    <div>
      <Hero />
      <OurTeacher />
      <Serves />
      <Quality />
      <CourseCategory />
    </div>
  );
};

export default Home2;
