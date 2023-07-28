import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Serves from "./Serves/Serves";
import OurTeacher from "./Teacher/OurTeacher";
import Quality from "./Quality/Quality";
import CourseCategory from "./CourseCategory/CourseCategory";
import { useLocation } from "react-router-dom";
import useTitle from "../../Hook/Hook";

const Home = () => {
  useTitle("Home");
  const location = useLocation();
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="">
      <Banner />
      <Serves />
      <Quality />
      <CourseCategory />
      <OurTeacher />
    </div>
  );
};

export default Home;
