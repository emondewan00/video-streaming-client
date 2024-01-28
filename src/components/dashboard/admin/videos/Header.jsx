import React, { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    const getVideosBySearch = async () => {
      const res = await fetch(
        `https://video-streaming-api.vercel.app/videos/search?text=${search}`
      );
      const data = await res.json();
      setVideos(data?.data?.result);
    };
    getVideosBySearch();
  };
  const sortHandler = (text) => {
    if (text === "createdAt") {
      const sortedVideo = [...videos].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return setVideos(sortedVideo);
    }
    if (text === "views") {
      const sortedVideo = [...videos].sort((a, b) => b.views - a.views);

      return setVideos(sortedVideo);
    }
  };
  return (
    <header className="flex justify-between items-center border-b border-gray-500 mb-4  h-20">
      <h1 className="text-3xl font-mono">
        All Videos{" "}
        {/* <span className="text-sm text-gray-200">{videos?.length} total</span> */}
      </h1>
      <div className="flex items-center gap-x-2">
        <div className="">
          <label htmlFor="">Sort by: </label>
          <br />
          <select
            name="sortBy"
            onChange={(e) => sortHandler(e.target.value)}
            className="text-black outline-none rounded"
          >
            <option defaultChecked hidden>
              Default
            </option>
            <option value="createdAt">Date</option>
            <option value="views">Views</option>
          </select>
        </div>
        <form onSubmit={searchHandler}>
          <input
            className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Find videos..."
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
