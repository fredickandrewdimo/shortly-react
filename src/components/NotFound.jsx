import { Link } from "react-router-dom";

import PageNotFound from "/src/assets/PageNotFound.svg";

const NotFound = () => {
  return (
    <div className="not-found home w-11/12 md:w-9/12 mx-auto">
      <div className="content flex flex-col items-center text-center py-24 md:flex-row-reverse md:justify-between">
        <div className="w-8/12 md:6/12 mx-auto mb-8">
          <img className="" src={PageNotFound} alt="" />
        </div>
        <div className="md:text-left">
          <h1 className="text-5xl font-bold mb-3 lg:text-7xl text-black">
            Page Not Found
          </h1>
          <p className="text-gray-500 mb-8 md:mb-10 lg:text-xl">
            This page doesn't exist or was removed! <br /> We suggest your back
            to home.
          </p>
          <Link
            to="/"
            className="lg:py-4 lg:px-6 py-3 px-6 rounded-full bg-lightGreen font-bold text-white hover:bg-darkGreen w-fit text-xl"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
