import React from "react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Banner2 = () => {
  const slidDoc = [
    {
      id: 1,
      title: "https://i.ibb.co/LnLzgx3/17.jpg",
      sub_title: "Avatar Part-1",
      season: 1,
      episodes: 3,
      year: 2003,
      category: "Comedy",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?",
    },
    {
      id: 2,
      title: "https://i.ibb.co/LnLzgx3/17.jpg",
      sub_title: "Spaider Man Untold",
      season: 2,
      episodes: 4,
      year: 2021,
      category: "Action",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      title: "https://i.ibb.co/LnLzgx3/17.jpg",
      sub_title: "Avenger Part-3",
      season: 3,
      episodes: 2,
      year: 2020,
      category: "Romance",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci rerum aspernatur error possimus iure nemo, perferendis, a explicabo quae, omnis vero? Dolor reiciendis voluptatum aliquid, error consequuntur officiis laudantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam maiores iste aspernatur illo voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, consequatur aspernatur voluptatem facere fugiat est quo accusamus impedit pariatur mollitia?",
    },
  ];
  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper w-full my-20 relative "
      >
        <div
          slot="container-start"
          className=" absolute w-screen h-screen object-cover object-center top-0 left-0 "
          style={{
            backgroundImage: `url(/banner3.jpg)`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {slidDoc.map((doc) => (
          <SwiperSlide key={doc.id}>
            <div className="px-20 py-20">
              <div className="title" data-swiper-parallax="-300">
                <div
                  className="mt-10 md:mt-0 lg:mt-0 xl:mt-0"
                  data-aos="fade-down"
                >
                  <img
                    className="movie-title max-w-[250px]"
                    src={doc.title}
                    alt=""
                  />
                </div>
              </div>
              <div className="subtitle " data-swiper-parallax="-200">
                {doc.sub_title}
              </div>
              <div className="text pt-4" data-swiper-parallax="-100">
                <p>{doc.discription}</p>
              </div>
              <button className="btn btn-outline mt-4 text-white bg-red-600 border-none">
                Play Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner2;
