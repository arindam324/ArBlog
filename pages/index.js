import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Post from "../components/Post";
import Widgets from "../components/Widgets";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#252525]">
      <main className="px-5 lg:px-20 mx-auto md:flex  ">
        <Header />
        <div className="px-5 py-4  overflow-y-auto">
          <SearchBar />
          <div className="">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
