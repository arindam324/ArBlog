import { SearchIcon } from "@heroicons/react/solid";
const Widgets = () => {
  return (
    <div className="hidden top-0 z-10 sticky py-4 lg:flex flex-col items-center h-screen max-w-[350px] w-full ">
      <div className="flex bg-white  space-x-4 px-6 py-3 rounded-md">
        <SearchIcon className="h-6" />
        <input
          placeholder="search..."
          className="outline-none w-full text-lg font-bold"
        />
      </div>
      <div className="w-full space-y-4 p-4 rounded-xl my-4 bg-[#282828] shadow-xl">
        <div className="flex space-x-4">
          <div className="h-10 w-16 grid place-items-center bg-indigo-600 rounded-full text-white">
            R
          </div>
          <h2 className="font-bold text-white">
            Set up a mobile app with React Native and Expo in 10 minutes
          </h2>
        </div>

        <div className="flex space-x-4">
          <div className="h-10 w-16 grid place-items-center bg-indigo-600 rounded-full text-white">
            R
          </div>
          <h2 className="font-bold text-white">
            Set up a mobile app with React Native and Expo in 10 minutes
          </h2>
        </div>

        <div className="flex space-x-4">
          <div className="h-10 w-16 grid place-items-center bg-indigo-600 rounded-full text-white">
            R
          </div>
          <h2 className="font-bold text-white">
            Set up a mobile app with React Native and Expo in 10 minutes
          </h2>
        </div>

        <div className="flex space-x-4">
          <div className="h-10 w-16 grid place-items-center bg-indigo-600 rounded-full text-white">
            R
          </div>
          <h2 className="font-bold text-white">
            Set up a mobile app with React Native and Expo in 10 minutes
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
