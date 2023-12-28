"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import dynamic from "next/dynamic";
import RelatedVideos from "@/components/video/RelatedVideos";
import Comments from "@/components/video/Comments";
import ViewsAndDesc from "@/components/video/ViewsAndDesc";
import VideosButtons from "@/components/video/VideosButtons";
import AuthorNameImg from "@/components/video/AuthorNameImg";
const NoSSR = dynamic(() => import("@/components/Player"), { ssr: false });

const Video = ({ params }) => {
  const [video, setVideo] = useState({});
  const socket = io("http://localhost:5000");
  const isLike = false;

  socket.on("connect", () => {
    // console.log(socket.connected, "socket connected");
  });

  socket.on("hello", (args) => {
    // console.log(args);
  });

  useEffect(() => {
    const getVideo = async () => {
      //get single video
      const res = await fetch(
        `http://localhost:5000/videos/single/${params.videoId}`
      );
      const data = await res.json();
      setVideo(data);
    };
    getVideo();
  }, [params]);

  return (
    <div className="mb-20 mt-14 text-white mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 md:gap-y-0">
        {/* Single video */}
        <div className="md:w-3/4 px-4 md:px-0 ">
          <div className="h-[25vh] md:h-[60vh]">
            <NoSSR url={video.video} />
          </div>
          <div className="p-4 bg-slate-700/40 flex flex-col md:block">
            {/* video title */}
            <h1 className="text-xl hidden md:block">{video.title}</h1>

            <div className="flex flex-col md:flex-row md:justify-between mt-2 items-center border-b pb-4 order-2">
              {/* author name image */}
              <AuthorNameImg />
              {/* buttons */}
              <VideosButtons id={video?._id} isLike={isLike} />
            </div>
            {/* views and description */}
            <ViewsAndDesc video={video} />
            {/* Comments shows  */}
            <Comments />
          </div>
        </div>
        {/* related videos shows  */}
        <RelatedVideos
          tags={video?.tags}
          currentVideo={{
            id: video._id,
            tags: video?.tags,
            category: video?.category,
          }}
        />
      </div>
    </div>
  );
};

export default Video;
