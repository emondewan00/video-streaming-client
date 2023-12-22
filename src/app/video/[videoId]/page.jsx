"use client";
import MovieCart from "@/components/cart/MovieCart";
import React, { useContext, useEffect, useState } from "react";
import {
  FaDownload,
  FaHeart,
  FaShare,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import moment from "moment";
import { AuthContext } from "@/Provider/AuthProvider";
// import apiInstance from "@/utils/axios";
const NoSSR = dynamic(() => import("@/components/Player"), { ssr: false });

const Video = ({ params }) => {
  const [data, setData] = useState([]);
  const [isCommentFull, setIsCommentFull] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [video, setVideo] = useState({});

  useEffect(() => {
    const getVideo = async () => {
      //get single video
      const res = await fetch(
        `http://localhost:5000/videos/single/${params.videoId}`
      );
      const data = await res.json();
      setVideo(data);
      //get related Video
      const tags = data?.tags?.join(",");
      const getRelated = await fetch(
        `http://localhost:5000/videos/tags?tags=${tags}&id=${data?._id}&category=${data?.category}`,
        { cache: "no-cache" }
      );
      const related = await getRelated.json();
      setData(related);
    };
    getVideo();
  }, [params]);

  const content = data?.data?.videos || [];
  const [fullText, setFullText] = useState(false);

  const textSlice =
    fullText === false ? video?.description?.slice(0, 110) : video?.description;

  //like handler
  const likeHandler = async (id) => {
    console.log({ videoId: id, email: currentUser?.email });
    const res = await fetch(`http://localhost:5000/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ videoId: id, email: currentUser?.email }),
    });
    const data = await res.json();
    console.log(data, "like respone");
  };
  const disLikeHandler = (id) => {};
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
            {/* author name and image like share */}
            <div className="flex flex-col md:flex-row md:justify-between mt-2 items-center border-b pb-4 order-2">
              <div className="flex gap-x-2 items-center">
                <img
                  src="https://i.ibb.co/LnLzgx3/17.jpg"
                  className="h-10 w-10 bg-cover object-cover rounded-full"
                  alt=""
                />
                <h3 className="text-2xl font-serif italic font-thin ">
                  MovieHub
                </h3>
              </div>

              <div className="overflow-x-auto ">
                <div className="flex gap-x-4">
                  <div className="bg-gray-600 py-2 px-3 text-sm rounded space-x-2 flex items-center">
                    <button
                      onClick={() => likeHandler(video._id)}
                      className=" flex items-center gap-x-1"
                    >
                      <FaThumbsUp className="text-blue-600 " />
                      <span>500k</span>
                    </button>
                    <div className="border h-full"></div>
                    <button
                      onClick={() => disLikeHandler(video._id)}
                      className=" flex items-center gap-x-1"
                    >
                      <FaThumbsDown className="text-blue-600 " />
                      <span>500k</span>
                    </button>
                  </div>
                  <button className="bg-gray-600 py-2 px-3 text-sm  rounded flex gap-x-2 items-center">
                    <FaShare />
                  </button>
                  <button className="bg-gray-600 py-2 px-3 text-sm  rounded flex gap-x-2 items-center">
                    <FaDownload />
                  </button>
                  <button className="bg-gray-600 py-2 px-3 text-sm  rounded flex gap-x-2 items-center">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
            {/* views and description */}
            <div className="mt-4 bg-slate-700/40 p-2 rounded order-1">
              <h3 className="text-lg md:hidden block">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className="text-sm">
                {video?.views} views{" "}
                <span className="text-red-500">
                  {moment(video?.publicIn).format("D MMM YY")}
                </span>
              </p>
              <p
                className={`mt-2 delay-200 duration-200 md:block hidden`}
                onClick={() => setFullText(!fullText)}
              >
                {textSlice}
                {fullText !== true && (
                  <span className="text-blue-600 ">...more</span>
                )}
              </p>
            </div>
            {/* all comments */}
            <div className="comment order-3">
              <h2 className="text-xl my-4">200 conmments </h2>
              <div className="flex items-center mt-2 gap-x-2">
                <img
                  src="https://i.ibb.co/LnLzgx3/17.jpg"
                  className="h-10 w-10 bg-cover object-cover rounded-full"
                  alt=""
                />
                <form className="grow">
                  <input
                    className="w-full p-2 bg-slate-700/50  outline-none border-blue-900 focus:border duration-150 delay-100 ease-linear rounded "
                    type="text"
                    placeholder="Add a comment... "
                  />
                </form>
              </div>
              <div className="all-comments ">
                <div className="flex gap-x-2 mt-2">
                  <img
                    src="https://i.ibb.co/LnLzgx3/17.jpg"
                    className="h-10 w-10 bg-cover object-cover rounded-full self-start"
                    alt=""
                  />
                  <div>
                    <p className="">
                      @emonHossain <span className="text-sm">1 year ago</span>
                    </p>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <img
                    src="https://i.ibb.co/LnLzgx3/17.jpg"
                    className="h-10 w-10 bg-cover object-cover rounded-full self-start"
                    alt=""
                  />
                  <div>
                    <p className="">
                      @emonHossain <span className="text-sm">1 year ago</span>
                    </p>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <img
                    src="https://i.ibb.co/LnLzgx3/17.jpg"
                    className="h-10 w-10 bg-cover object-cover rounded-full self-start"
                    alt=""
                  />
                  <div>
                    <p className="">
                      @emonHossain <span className="text-sm">1 year ago</span>
                    </p>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <img
                    src="https://i.ibb.co/LnLzgx3/17.jpg"
                    className="h-10 w-10 bg-cover object-cover rounded-full self-start"
                    alt=""
                  />
                  <div>
                    <p className="">
                      @emonHossain <span className="text-sm">1 year ago</span>
                    </p>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Related Videos  */}
        <div>
          {content.map((items) => (
            <div
              key={items._id}
              className="rounded relative text-white md:h-56 md:w-56 mb-4 px-4 md:px-0 "
            >
              <MovieCart video={items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
