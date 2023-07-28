import { useState } from "react";
import { Link } from "react-router-dom";
import colorLogo from "../../Assist/logo/logocolor.svg";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [doctorsDropdownOpen, setDoctorsDropdownOpen] = useState(false);

  // for home
  const toggleHomeDropdown = () => setHomeDropdownOpen(!homeDropdownOpen);
  const homeDropdownClose = () => setHomeDropdownOpen(false);

  //for pages
  const togglePagesDropdown = () => setPagesDropdownOpen(!pagesDropdownOpen);
  const pagesDropdownClose = () => setPagesDropdownOpen(false);

  //for shop
  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen);
  const shopDropdownClose = () => setShopDropdownOpen(false);

  //for blog
  const toggleBlogDropdown = () => setBlogDropdownOpen(!blogDropdownOpen);
  const blogDropdownClose = () => setBlogDropdownOpen(false);

  //for doctors
  const toggleDoctorDropdown = () =>
    setDoctorsDropdownOpen(!doctorsDropdownOpen);
  const doctorsDropdownClose = () => setDoctorsDropdownOpen(false);

  const menuItems = (
    <>
      <li
        className="font-bold nav-item text-lg  text-white  group"
        onMouseEnter={toggleHomeDropdown}
        onMouseLeave={homeDropdownClose}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex cursor-pointer items-center py-4 hover:text-brand duration-300">
          <span className="group-hover:-translate-x-1 duration-300">Home</span>

          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            width="25"
            className="group-hover:translate-y-1 duration-300"
          />
        </div>

        {homeDropdownOpen && (
          <ul className="dropdown-menu bg-white pr-10 rounded-lg py-4 absolute top-auto">
            <li>
              <Link
                title="Home1"
                to="/"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Home1
              </Link>
            </li>
            <li>
              <Link
                title="Home2"
                to="/home2"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Home2
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* home end here */}
      <li
        className="font-bold nav-item text-lg  text-white group"
        onMouseEnter={togglePagesDropdown}
        onMouseLeave={pagesDropdownClose}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex cursor-pointer items-center py-4 hover:text-brand">
          <span className="group-hover:-translate-x-1 duration-300">Pages</span>
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            width="25"
            className="group-hover:translate-y-1 duration-300"
          />
        </div>

        {pagesDropdownOpen && (
          <ul className="dropdown-menu bg-white pr-10 rounded-lg py-4 absolute top-auto">
            <li>
              <Link
                title="courses"
                to="/courses"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                title="CoursesDetails"
                to="/coursesdetails"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Courses Detials
              </Link>
            </li>
            <li>
              <Link
                title=" Events"
                to="/events"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                title=" Event Details"
                to="/eventdetails"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Event Detials
              </Link>
            </li>
            <li>
              <Link
                title="Cart"
                to="/cart"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                title="Single Product"
                to="/singlepro"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Single Product
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* pages end here */}
      <li
        className="font-bold nav-item text-lg  text-white group"
        onMouseEnter={toggleShopDropdown}
        onMouseLeave={shopDropdownClose}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex cursor-pointer items-center py-4 hover:text-brand">
          <span className="group-hover:-translate-x-1 duration-300">Shop</span>
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            width="25"
            className="group-hover:translate-y-1 duration-300"
          />
        </div>

        {shopDropdownOpen && (
          <ul className="dropdown-menu bg-white pr-10 rounded-lg py-4 absolute top-auto">
            <li>
              <Link
                title="Category 1"
                to="/category1"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Category 1
              </Link>
            </li>
            <li>
              <Link
                title="Category 2"
                to="/Category2"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Category 2
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* clinics end here */}

      <li
        className="font-bold nav-item text-lg text-white group"
        onMouseEnter={toggleBlogDropdown}
        onMouseLeave={blogDropdownClose}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex cursor-pointer items-center py-4 hover:text-brand">
          <span className="group-hover:-translate-x-1 duration-300">Blog</span>
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            width="25"
            className="group-hover:translate-y-1 duration-300"
          />
        </div>

        {blogDropdownOpen && (
          <ul className="dropdown-menu bg-white pr-10 rounded-lg py-4 absolute top-auto">
            <li>
              <Link
                title="Blog"
                to="/blog"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                title="Blog Detials"
                to="/blogDetials"
                className="block px-4 py-2 text-lg text-brand2 hover:translate-x-1 duration-300 hover:text-brand"
              >
                Blog Detials
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* blog end here */}

      <li className="font-bold nav-item text-lg  text-white group hover:text-brand hover:-translate-x-1 duration-300">
        <Link title="Contact us" to="/contact">
          Contact us
        </Link>
      </li>
      <li
        onClick={() => setIsMenuOpen(false)}
        className="font-bold nav-item text-lg  text-white group hover:text-brand hover:-translate-x-1 duration-300"
      >
        <Link title="About" to="/about">
          About
        </Link>
      </li>
      <li
        onClick={() => setIsMenuOpen(false)}
        className="font-bold nav-item text-lg  text-white group hover:text-brand hover:-translate-x-1 duration-300"
      >
        <Link title="Cart" to="/cart">
          <Icon icon="ic:outline-shopping-cart" width="25px" />
        </Link>
      </li>
      <li
        onClick={() => setIsMenuOpen(false)}
        className="font-bold nav-item text-lg  text-white group hover:text-brand hover:-translate-x-1 duration-300"
      >
        <Link title="Cart" to="/userinfo">
          <Icon icon="iconamoon:profile-circle-fill" width="25px" />
        </Link>
      </li>
    </>
  );
  const [myNavBar, setMyNavBar] = useState(false);
  const handleNavbar = () => {
    setMyNavBar(!myNavBar);
  };
  const mobileMenuItems = (
    <>
      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercase border-b-transparent hover:border-b-2  md:my-4"
      >
        <Link to="/">Home</Link>
      </li>
      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4"
      >
        <Link to="/about">About</Link>
      </li>
      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4"
      >
        <Link to="/shop">Shop</Link>
      </li>
      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4"
      >
        <Link to="/pages">Pages</Link>
      </li>

      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4"
      >
        <Link to="/contact">Contact</Link>
      </li>
      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4"
      >
        <Link to="/blog">Blog</Link>
      </li>
      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4"
      >
        <Link to="/courses">Courses</Link>
      </li>
      <li
        onClick={() => setMyNavBar(false)}
        className="ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4"
      >
        <Link to="/blog">
          <span>
            <Icon icon="material-symbols:shopping-cart" width="25px" />{" "}
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky shadow-md py-4 top-0 z-[9999] bg-brand2">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={colorLogo} alt="logo" className="w-32 cursor-pointer" />
          </Link>
          <ul className="items-center nav-list hidden space-x-8 lg:flex">
            {menuItems}
          </ul>

          <div className="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-700 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full ">
                <div className="p-5 bg-brand2  border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img
                          src={colorLogo}
                          alt="logo"
                          className="w-32 h-auto cursor-pointer"
                        />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5  text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="">
                    <ul className="space-y-4  duration-500 text-brand">
                      {menuItems}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
