import Link from "next/link";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";

const Cover = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-[50vh] text-white  mb-8 overflow-hidden ">
      <div className="col-span-2 relative">
        <img
          src="https://i.ibb.co/LnLzgx3/17.jpg"
          alt=""
          className="object-cover bg-cover  w-full h-full absolute"
        />
         <Link
            href={`/video/${1}`}
            className="absolute top-0 left-0 w-full h-full rounded z-20"
          ></Link>
        <div className="   relative -bottom-[340px] left-10">
          <p className="text-lg">
            Lorem ipsum dolor sit amet Lorem ipsum dolor
          </p>
          <p className="text-sm">20k views. 2 weeks ago</p>
        </div>
      </div>
      <div>
        <div className=" relative text-white shadow-md ">
          <img
            src="https://i.ibb.co/LnLzgx3/17.jpg"
            alt=""
            className=" w-full bg-cover object-fill h-[25vh]"
          />
          <Link
            href={`/video/${1}`}
            className="absolute top-0 left-0 w-full h-full rounded z-20"
          ></Link>
          <div className="rounded-b flex absolute z-10 bottom-6 left-6">
            <div>
              <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
              <p className="text-sm">20k views. 2 weeks ago</p>
            </div>
            <FaEllipsisV className="mt-2 z-40" />
          </div>
        </div>
        <div className=" relative text-white shadow-md ">
          <img
            src="https://i.ibb.co/LnLzgx3/17.jpg"
            alt=""
            className=" w-full bg-cover object-fill h-[25vh]"
          />
          <Link
            href={`/video/${1}`}
            className="absolute top-0 left-0 w-full h-full rounded z-20"
          ></Link>
          <div className="rounded-b flex absolute z-10 bottom-6 left-6">
            <div>
              <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
              <p className="text-sm">20k views. 2 weeks ago</p>
            </div>
            <FaEllipsisV className="mt-2 z-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
