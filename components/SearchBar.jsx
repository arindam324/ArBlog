const SearchBar = () => {
  return (
    <div className="bg-[#282828]  w-full rounded-xl p-5 shadow-xl">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full grid place-items-center text-white font-bold bg-indigo-600">
          A
        </div>
        <h2 className="text-white lg:text-xl font-bold">Arindam Roy</h2>
      </div>
      <button className="my-2 bg-white w-full p-2 rounded-md">
        Write an article
      </button>
    </div>
  );
};
export default SearchBar;
