import Shortener from "./Shortener";
import Coworker from "/src/assets/coworkers.svg";

const Home = () => {
  return (
    <div className="home w-11/12 md:w-9/12 mx-auto">
      <div className="content flex flex-col items-center text-center py-16 md:flex-row-reverse md:justify-between">
        <div className="w-8/12 md:6/12 mx-auto mb-5">
          <img className="" src={Coworker} alt="" />
        </div>
        <div className="md:text-left">
          <h1 className="text-5xl font-bold mb-3 lg:text-7xl">
            More than just shorter links
          </h1>
          <p className="text-gray-500 mb-5 md:mb-8 lg:text-xl">
            Build your brand's recognition and get detailed insights <br /> on
            how your link are performing.
          </p>
          <button className="lg:py-4 lg:px-6 py-3 px-6 rounded-full bg-teal-400 font-bold text-white hover:bg-teal-500 w-fit text-xl">
            Get Started
          </button>
        </div>
      </div>

      <Shortener />
    </div>
  );
};

export default Home;
