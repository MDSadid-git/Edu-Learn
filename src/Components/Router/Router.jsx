import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Courses from "../Pages/Courses/Courses";
import Shop from "../Pages/Shop/Shop";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import BlogDetials from "../Pages/Blog/BlogDetials";
import CoursesDetials from "../Pages/Courses/CoursesDetials";
import Event from "../Pages/Event/Event";
import EventDetials from "../Pages/Event/EventDetials";
import SinglePro from "../Pages/Cartagory/SinglePro";
import Home2 from "../Pages/Home/Home2";
import Catagory from "../Pages/Cartagory/Catagory";
import Catagory2 from "../Pages/Cartagory/Catagory2";
import UserInfo from "../Pages/UserInfo/UserInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home2", element: <Home2 /> },
      { path: "/about", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "/userinfo", element: <UserInfo /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Courses /> },
      { path: "/coursesdetails", element: <CoursesDetials /> },
      { path: "/cart", element: <Cart /> },
      { path: "/events", element: <Event /> },
      { path: "/eventdetails", element: <EventDetials /> },
      { path: "/about", element: <About /> },
      { path: "/category1", element: <Catagory /> },
      { path: "/category2", element: <Catagory2 /> },
      { path: "/singlepro", element: <SinglePro /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/blogDetials", element: <BlogDetials /> },
      { path: "/bloggrid", element: <BlogDetials /> },
    ],
  },
]);
