import { HomeIcon, DocumentTextIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="md:h-screen py-4 lg:min-h-screen  flex lg:max-w-[250px] top-0 z-10 lg:sticky flex-col md:items-center md:max-w-[150px] w-full">
      <h2 className="text-2xl lg:text-4xl font-bold text-white ">
        Ar<span className="text-[#3C72FF]">Blog</span>
      </h2>

      <div className="my-12 hidden md:block">
        <div className="flex space-x-2 text-white">
          <HomeIcon className="h-6" />
          <h2 className="text-lg font-bold">Home</h2>
        </div>

        <div className="flex my-4 space-x-2 text-white">
          <DocumentTextIcon className="h-6" />
          <h2 className="text-lg font-bold">Draft</h2>
        </div>
      </div>
      <button className="bg-[#3c72ff] hidden md:block px-8 py-4 text-white rounded-xl font-bold">
        Write
      </button>
    </header>
  );
};

export default Header;
