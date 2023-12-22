"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import apiInstance from "@/utils/axios";
import moment from "moment";
import Image from "next/image";
// import postHistory from "@/utils/postHistory";
import Link from "next/link";
import React, { useContext } from "react";
import { FaEllipsisV, FaShare } from "react-icons/fa";
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
  console.log(video, "video cart");
  return (
    <div className=" relative text-white shadow-xl shadow-gray-700/20 ">
      <Image
        width={500}
        height={500}
        src={video?.thumbnail}
        alt=""
        className="rounded w-full h-full"
      />
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
        <div className="relative group">
          <label htmlFor="share" className="">
            <FaEllipsisV className="mt-2 relative cursor-pointer z-10" />
          </label>
          <input type="checkbox" className="hidden peer" id="share" />
          <div className="absolute z-20 bg-slate-700 rounded whitespace-nowrap px-4 py-2 right-0 peer-checked:block hidden group-hover:block">
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
