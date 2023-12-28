"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import apiInstance from "@/utils/axios";
import moment from "moment";
import Image from "next/image";
// import postHistory from "@/utils/postHistory";
import Link from "next/link";
import React, { useContext } from "react";
import { FaEllipsisV, FaPlay, FaShare } from "react-icons/fa";
// import CartLink from "./CartLink";

const MovieCart = ({ video }) => {
  const { currentUser } = useContext(AuthContext);
  //post history data on server
  const postData = async (videoId) => {
    const res = await apiInstance.post("/history", {
      videoId,
      email: currentUser?.email,
    });
    return await res.data;
  };
  return (
    <div className="group/play relative text-white shadow-xl shadow-gray-700/20 ">
      <div className="relative h-[130px] overflow-hidden">
        <Image
          fill
          src={video?.thumbnail}
          alt=""
          className="rounded w-full object-cover object-center group-hover/play:scale-110 transition-all duration-300 delay-100"
        />
        <FaPlay className="absolute top-1/2 left-1/2 text-3xl text-gray-400 group-hover/play:text-white group-hover/play:text-4xl transition-all duration-300 delay-100 ease-linear mr-10" />
      </div>
      <Link
        onClick={() => postData(video._id)}
        href={`/video/${video?._id}`}
        className="absolute top-0 left-0 w-full h-full rounded "
      ></Link>
      {/* <CartLink /> */}
      <div className="py-4 rounded-b flex px-2 justify-between">
        <div>
          <p className="text-sm">{video?.title}</p>
          <p className="text-[12px] ">
            {video?.views} views.{" "}
            <span className="text-secondary">
              {moment(video?.puplicIn).startOf("day").fromNow()}
            </span>
          </p>
        </div>
        <div className="relative group/popup">
          <label htmlFor="share" className="">
            <FaEllipsisV className="mt-2 relative cursor-pointer z-10" />
          </label>
          <input type="checkbox" className="hidden peer" id="share" />
          <div className="absolute z-20 bg-slate-700 rounded whitespace-nowrap px-4 py-2 right-0 peer-checked:block hidden group-hover/popup:block">
            <ul>
              <li> Save to Watch Later</li>
              <li className="flex items-center gap-x-2">
                <FaShare /> Share
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
