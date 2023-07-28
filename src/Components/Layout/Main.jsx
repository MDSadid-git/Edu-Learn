import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import RNavbar from "../Share/RNavbar/RNavbar";

const Main = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <RNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
