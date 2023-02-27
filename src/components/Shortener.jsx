const Shortener = () => {
  return (
    <div className="shortener w-11/12 md:w-10/12 mx-auto bg-neutral-900 flex items-center justify-center p-7 mb-10 rounded-lg">
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
          <button className="bg-teal-400 rounded-md text-lg font-bold text-white hover:bg-teal-500 py-2 px-4  w-full md:w-fit">
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shortener;
