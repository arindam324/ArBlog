import { HeartIcon, ChatIcon, BookmarkIcon } from "@heroicons/react/solid";

const Post = () => {
  return (
    <article className="p-4 bg-[#282828] my-4 rounded-md shadow-xl">
      <div className="flex">
        <h2 className="text-xl font-bold text-white -leading-4">
          Six(6) Steps to becoming a Software Developer
        </h2>
        <img
          className="w-20 h-20"
          src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <p className="text-sm text-gray-200 my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan,
        placerat nibh iaculis in id integer. Egestas feugiat in pharetra
        aliquam, adipiscing sed.
      </p>
      <div className="flex items-center text-white justify-between">
        <div className="flex space-x-4">
          <HeartIcon className="h-6 cursor-pointer" />
          <ChatIcon className="h-6 cursor-pointer" />
        </div>
        <BookmarkIcon className="h-6 cursor-pointer" />
      </div>
    </article>
  );
};

export default Post;
