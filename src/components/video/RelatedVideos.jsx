"use client";
import { useEffect, useState } from "react";
import MovieCart from "../card/MovieCard";

const RelatedVideos = ({ currentVideo }) => {
  const [data, setData] = useState([]);
  const { tags, category, id } = currentVideo || {};
  useEffect(() => {
    const getRelatedVideos = async () => {
      //get related Video
      const tagsInStr = tags?.join(",");
      const getRelated = await fetch(
        `https://video-streaming-api.vercel.app/videos/tags?tags=${tagsInStr}&id=${id}&category=${category}`,
        { cache: "no-cache" }
      );
      const related = await getRelated.json();
      setData(related);
    };
    getRelatedVideos();
  }, [category, id, tags]);

  const content = data?.data?.videos || [];
  return (
    <div>
      {content.map((items) => (
        <div
          key={items._id}
          className="rounded relative text-white md:h-56 md:w-56 mb-1 px-4 md:px-0 "
        >
          <MovieCart video={items} />
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
