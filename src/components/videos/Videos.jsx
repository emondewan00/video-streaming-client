import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MovieCart from "../card/MovieCard";

const Videos = ({ videos, page, totalPages }) => {
  return (
    <div className="grow">
      <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-3 px-4 md:px-0">
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
  );
};

export default Videos;
