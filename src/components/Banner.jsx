import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-violet">
      <div className="content w-11/12 md:w-9/12 mx-auto text-center py-10 md:py-20">
        <h1 className="text-white text-4xl font-bold mb-5 md:mb-10">
          Boost your links today
        </h1>
        <Link
          to="/"
          className="py-3 px-5  rounded-full  font-bold text-white bg-lightGreen hover:bg-darkGreen"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
