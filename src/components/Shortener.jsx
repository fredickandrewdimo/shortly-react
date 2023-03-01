import { useState } from "react";

const Shortener = () => {
  const endpoint = "https://api.shrtco.de/v2/shorten";
  const link = "https://www.google.com";

  const [shortenedUrl, setShortenedURl] = useState(null);

  // Store the shortenedURL in a variable

  // Store the input value in a variable

  // Create function that handle click inside of it is the fetch API

  // Make a function that copy the value of shortenedURL in a clipboard

  // fetch(`${endpoint}?url=${encodeURIComponent(link)}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setShortenedURl(data.result.short_link);
  //   })
  //   .catch((error) => console.error(error));

  return (
    <div className="content">
      <div className="shortener w-11/12 md:w-10/12 mx-auto bg-violet flex items-center justify-center p-7 mb-10 rounded-lg">
        <div className="content w-full">
          <form
            action=""
            className="flex-col flex md:flex-row justify-between items-center"
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="py-2 px-4 rounded-md md:flex-grow md:mr-3 w-full md:w-fit mb-5 md:mb-0"
            />
            <button className="bg-lightGreen rounded-md text-lg font-bold text-white hover:bg-darkGreen py-2 px-4  w-full md:w-fit">
              Shorten It!
            </button>
          </form>
        </div>
      </div>
      <div className="result w-11/12 md:w-10/12 mx-auto bg-gray-200 flex items-center justify-center p-7 mb-10 rounded-lg">
        <div className="content py-2 px-4 rounded-md md:flex-grow w-full md:w-fit bg-white flex items-center justify-between mr-3">
          <p>{link}</p>
          <p>{shortenedUrl}</p>
        </div>
        <button className="py-2 px-4 bg-lightGreen rounded-md text-white font-bold hover:bg-darkGreen">
          Copy
        </button>
      </div>
    </div>
  );
};

export default Shortener;
