import details from "../data/statistics.jsx";

const Statistics = () => {
  const headline = "Advanced Statistics";
  const subHeadline =
    "Track how your links are performing across the web with our advanced statistics dashboard.";

  return (
    <div className="statistics bg-gray-200 ">
      <div className="content py-10 md:py-20 mx-auto w-11/12 md:w-9/12">
        <h1 className="text-4xl font-bold text-center mb-3">{headline}</h1>
        <p className="text-center text-gray-500 text-lg mb-10">{subHeadline}</p>
        <div className="containers md:grid gap-4 grid-cols-3 text-center md:text-start">
          {/* Map the card component details */}
          {details.map((detail) => (
            <div className="p-6 bg-white rounded-lg flex flex-col items-center mb-5 md:mb-0 text-center">
              <div className="svg bg-violet flex items-center justify-center w-fit p-6 mt-3 mb-5 rounded-full">
                {detail.logo}
              </div>
              <h3 className="text-xl font-bold mb-2">{detail.headline}</h3>
              <p className="text-gray-400">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
