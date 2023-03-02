import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClickMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="navbar w-11/12 md:w-9/12 mx-auto py-5 md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between w-full md:w-fit">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl mr-8 hover:text-lightGreen">
          Shortly
        </Link>
        {/* Hamburger Menu */}
        <button onClick={handleClickMenu} className="md:hidden">
          {isToggled ? (
            <FontAwesomeIcon
              className="text-black text-3xl hover:text-lightGreen mx-3 md:mx-3"
              href=""
              icon={faTimes}
            />
          ) : (
            <FontAwesomeIcon
              className="text-black text-3xl hover:text-lightGreen mx-3 md:mx-3"
              href=""
              icon={faBars}
            />
          )}
        </button>
      </div>

      {/* Links */}
      <div
        className={`links w-full md:flex md:items-center md:justify-between my-5 md:my-0 border-b-2 border-lightGreen pb-6 md:pb-0 md:border-0 ${
          isToggled ? "show" : "hidden"
        }`}
      >
        <div className="text-gray-400 font-bold text-lg flex flex-col md:flex-row mb-5 md:mb-0">
          <Link to="/" className="md:mr-3 hover:text-gray-700">
            Features
          </Link>
          <Link to="/" className="md:mr-3 hover:text-gray-700">
            Pricing
          </Link>
          <Link to="/" className="hover:text-gray-700">
            Resources
          </Link>
        </div>
        <div className="text-base md:text-lg">
          <Link
            to="/"
            className="mr-3 text-gray-400 hover:text-gray-700 font-bold mb-3"
          >
            Login
          </Link>
          <Link
            to="/"
            className="md:py-3 md:px-5 py-2 px-3 rounded-full bg-teal-300 font-bold text-white hover:bg-darkGreen w-fit"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
