import { useState } from "react";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClickMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="navbar w-11/12 md:w-9/12 mx-auto py-5 md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between w-full md:w-fit">
        {/* Logo */}
        <a href="" className="font-bold text-2xl mr-8">
          Shortly
        </a>
        {/* Hamburger Menu */}
        <button onClick={handleClickMenu} className="md:hidden">
          {isToggled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Links */}
      <div
        className={`links w-full md:flex md:items-center md:justify-between my-5 md:my-0 border-b-2 border-teal-500 pb-6 md:pb-0 md:border-0 ${
          isToggled ? "show" : "hidden"
        }`}
      >
        <div className="text-gray-400 font-bold text-lg flex flex-col md:flex-row mb-5 md:mb-0">
          <a href="" className="md:mr-3 hover:text-gray-700">
            Features
          </a>
          <a href="" className="md:mr-3 hover:text-gray-700">
            Pricing
          </a>
          <a href="" className="hover:text-gray-700">
            Resources
          </a>
        </div>
        <div className="text-base md:text-lg">
          <a
            href=""
            className="mr-3 text-gray-400 hover:text-gray-700 font-bold mb-3"
          >
            Login
          </a>
          <a
            href=""
            className="md:py-3 md:px-5 py-2 px-3 rounded-full bg-teal-300 font-bold text-white hover:bg-teal-500 w-fit"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
