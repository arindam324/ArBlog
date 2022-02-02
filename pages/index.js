import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#252525]">
      <main className="p-5 mx-auto">
        <Header />
        <SearchBar />
        <div>
          <Post />

          <Post />

          <Post />
        </div>
      </main>
    </div>
  );
};

export default Home;
