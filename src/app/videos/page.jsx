"use client";
import { useEffect, useState } from "react";
import Categories from "@/components/videos/Categories";
import Videos from "@/components/videos/Videos";
import SearchBox from "@/components/videos/SearchBox";

const AllMovies = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageUrl, setPageUrl] = useState(`limit=15&page=${page}`);
  const [category, setCategory] = useState("&");
  const [searchText, setSearchText] = useState("");
  const baseUrl = "https://video-streaming-api.vercel.app/videos?";
  const [searchUrl, setSearchUrl] = useState(baseUrl + pageUrl + category);

  // useEffect(() => {
  //   if (searchText) {
  //     setSearchUrl(baseUrl + `text=` + searchText + "&" + pageUrl + category);
  //   }
  // }, [searchText]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videos = await fetch(searchUrl, {
          cache: "no-cache",
        });
        const result = await videos.json();
        console.log(result, searchUrl);
        setVideos(result);
      } catch (error) {
        // return error;
      }
    };
    getVideos();
  }, [category, pageUrl, searchText]);

  const pages = videos.totalVideo / 15;
  const totalPages = Math.ceil(pages);

  return (
    <div className="max-w-7xl mx-auto mt-14 mb-20">
      <div className="md:flex gap-x-8">
        <div className="bg-slate-800 p-6 md:w-[340px] h-fit rounded text-white">
          {/* search */}
          <SearchBox
            setSearchText={setSearchText}
            setSearchUrl={setSearchUrl}
          />

          {/* categories */}
          <Categories
            setCategory={setCategory}
            setPage={setPage}
            setPageUrl={setPageUrl}
          />
        </div>
        {/* videos cart */}
        <Videos videos={videos} page={page} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default AllMovies;
