import { useState } from "react";

const Shortener = () => {
  // API URL
  const endpoint = "https://api.shrtco.de/v2/shorten";

  // States
  const [shortenedUrl, setShortenedURl] = useState(null);
  const [inputLink, setInputLink] = useState("");
  const [isError, setIsError] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [results, setResults] = useState([]);

  // Submit the link to API
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);

    fetch(`${endpoint}?url=${encodeURIComponent(inputLink)}`)
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
          throw Error("Cannot fetch the data in that endpoint");
        } else {
          setIsError(false);
          return response.json();
        }
      })
      .then((data) => {
        setShortenedURl(data.result.short_link);
        // setIsResult(true);
        setIsError(false);
        setInputLink("");

        setResults([
          ...results,
          {
            link: inputLink,
            shortened: data.result.short_link,
            isCopy: false,
          },
        ]);
      })
      .catch((error) => {
        // setIsResult(false);
        setIsError(true);
        console.error(error);
      });

    setIsClick(true);
    setTimeout(() => {
      setIsClick(false);
    }, 1000);
  };

  // Copy to the Clipboard
  const handleCopy = (result) => {
    navigator.clipboard.writeText(result.shortened);
    const updatedResults = results.map((r) => {
      if (r.shortened === result.shortened) {
        return {
          ...r,
          isCopy: true,
        };
      }
      return r;
    });
    setResults(updatedResults);

    setTimeout(() => {
      const updatedResults = results.map((r) => {
        if (r.shortened === result.shortened) {
          return {
            ...r,
            isCopy: false,
          };
        }
        return r;
      });
      setResults(updatedResults);
    }, 1000);

    console.log("Copied");
  };

  return (
    <div className="content">
      <div className="shortener w-11/12 md:w-10/12 mx-auto bg-violet flex items-center justify-center p-7 mb-10 rounded-lg">
        <div className="content w-full">
          <form
            onSubmit={handleSubmit}
            className="flex-col flex md:flex-row justify-between items-center"
          >
            <input
              value={inputLink}
              onChange={(e) => setInputLink(e.target.value)}
              type="text"
              placeholder={
                isError ? "Please enter a valid URL" : "Shorten a link here..."
              }
              className={`py-2 px-4 rounded-md md:flex-grow md:mr-3 w-full md:w-fit  md:mb-0 ${
                isError ? "border-2 border-rose-500" : ""
              }`}
            />
            {isError && (
              <p className="invalid-link my-1  text-rose-500 ">Invalid URL</p>
            )}
            <button
              type="submit"
              disabled={!inputLink}
              className="bg-lightGreen rounded-md mt-5 md:mt-0 text-lg font-bold text-white hover:bg-darkGreen py-2 px-4  w-full md:w-fit"
            >
              {isClick ? "Shortened!" : "Shorten It!"}
            </button>
          </form>
        </div>
      </div>

      {results.length > 0 && (
        <div className="result-container w-11/12 md:w-10/12 mx-auto bg-gray-200 p-7 mb-10 rounded-lg">
          <h3 className="mb-5 font-bold text-xl">Shortened Links</h3>
          <div className="result">
            {results.map((result, index) => (
              <div
                key={index}
                className="content py-2 px-4 rounded-md flex-grow w-full bg-white flex items-center justify-between mr-3 mb-5"
              >
                <div className="md:flex md:justify-between md:items-center w-full">
                  <div className="url mb-2">
                    <p className="text-sm text-gray-500">Link</p>
                    <p>{result.link}</p>
                  </div>
                  <div className="shortened md:mr-5">
                    <p className="text-sm text-gray-500">Shortened Link</p>
                    <p className="text-lightGreen">{result.shortened}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(result)}
                  className={`py-2 px-4 bg-lightGreen rounded-md text-white font-bold hover:bg-darkGreen ${
                    result.isCopy ? "bg-violet hover:bg-violet" : ""
                  }`}
                >
                  {result.isCopy ? "Copied" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shortener;
