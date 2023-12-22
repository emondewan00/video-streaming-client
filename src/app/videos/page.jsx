"use client";
import MovieCart from "@/components/cart/MovieCart";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import videoCategories from "@/utils/categories";

const AllMovies = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageUrl, setPageUrl] = useState(`limit=15&page=${page}`);
  const [category, setCategory] = useState("&");

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videos = await fetch(
          "http://localhost:5000/videos?" + pageUrl + category,
          {
            cache: "no-cache",
          }
        );
        const result = await videos.json();
        setVideos(result);
      } catch (error) {
        // return error;
      }
    };
    getVideos();
  }, [category, pageUrl]);

  const pages = videos.totalVideo / 15;
  const totalPages = Math.ceil(pages);

  return (
    <div className="max-w-7xl mx-auto mt-14 mb-20">
      <div className="md:flex gap-x-8">
        <div className="bg-slate-800 p-6 md:w-[340px] h-fit rounded text-white">
          <div>
            <h1 className="text-3xl mb-2">Search</h1>
            <form className="relative">
              <input
                type="text"
                className="p-4 bg-black/70 relative outline-none"
                placeholder="Search..."
              />
              <button
                className="p-4 bg-red-600 absolute right-0 top-0"
                type="submit"
              >
                <FaSearch className="text-2xl" />
              </button>
            </form>
          </div>
          <div className="my-4">
            <h1 className="text-xl mb-2">Filter By Category</h1>
            <ul className="list-disc list-inside">
              {videoCategories.sort().map((category, index) => (
                <li
                  onClick={() => {
                    setCategory(`&category=${category}`);
                    setPageUrl(`limit=15&page=1`);
                    setPage(1);
                  }}
                  className="cursor-pointer"
                  key={index}
                >
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-0">
            {videos?.data?.videos.map((items) => (
              <div key={items._id}>
                <MovieCart video={items} />
              </div>
            ))}
          </div>
          <div className="text-white  items-center gap-x-2  inline-flex  mt-8">
            <button
              disabled={1 >= page}
              onClick={() => {
                setPage(page + 1);
                setPageUrl(`limit=15&page=${page + 1}`);
              }}
              className="bg-gray-200/20 border-blue-600 border-2 p-4 text-white rounded-full"
            >
              <FaChevronLeft />
            </button>
            {page}of {totalPages}
            {/* <span className=" px-4 bg-gray-200/20 py-2 text-white rounded-full ">
              {prevPage}
            </span>
            <span className=" px-4 bg-blue-600 py-2 text-white rounded-full ">
              {pagesArray[page - 1]}
            </span>
            <span className=" px-4 bg-gray-200/20 py-2 text-white rounded-full ">
              {nextPage}
            </span> */}
            <button
              disabled={totalPages === page}
              onClick={() => {
                setPage(page + 1);
                setPageUrl(`limit=15&page=${page + 1}`);
              }}
              className="bg-gray-200/20 outline outline-blue-600 p-4 text-white rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
