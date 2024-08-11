"use client";
import React, { useEffect, useState } from "react";
import "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MovieCart from "../card/MovieCard";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const getBanners = async () => {
      const res = await fetch(
        "https://video-streaming-api.vercel.app/videos?showInBanner=show",
        { cache: "no-cache" }
      );
      const data = await res.json();
      setBanner(data.data.videos);
    };
    getBanners();
  }, []);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          waitForTransition: true,
        }}
        speed={2000}
        loop={true}
        className="mySwiper "
        modules={[Autoplay]}
      >
         {banner.map((item) => (
          <SwiperSlide key={item._id}>
            <div
              className="h-[70vh] grid grid-cols-1 md:grid-cols-2 items-center bg-cover bg-no-repeat bg-center rounded-md justify-around justify-items-center"
              style={{
                backgroundImage: `url(${item.thumbnail})`,
              }}
            >
              <div className=" order-1 md:order-none px-4">
                <h1 className="text-xl md:text-5xl uppercase text-white border-l-4 border-red-600 pl-2">
                  {item.title}
                </h1>
                <p className="md:text-xl mt-2 text-gray-300">
                  {item.description}
                </p>
                <p className=" text-white">
                  <span className="text-red-600">Category:</span>
                  {item.category}
                </p>
                <Link
                  href={`/video/${item._id}`}
                  className="uppercase bg-red-600 rounded text-white p-4 text-lg mt-2 inline-block"
                >
                  <FaPlay className="inline mr-1" /> Play now
                </Link>
              </div>
              <div className="w-60 md:w-80 bg-slate-900/90  rounded">
                <MovieCart video={item} />
              </div>
            </div>
          </SwiperSlide>
        ))} 
      </Swiper>
    </>
  );
};

export default Banner;
