import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaRegPlayCircle,
  FaSignOutAlt,
  FaPlus,
  FaVideo,
  FaUsers,
  FaImage,
} from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    { id: 1, path: "/dashboard/admin/home", name: "Home", icon: FaHome },
    {
      id: 2,
      path: "/dashboard/admin/addvideo",
      name: "Add Video",
      icon: FaPlus,
    },
    { id: 3, path: "/dashboard/admin/videos", name: "Videos", icon: FaVideo },
    { id: 4, path: "/dashboard/admin/users", name: "Users", icon: FaUsers },
  ];
  return (
    <div className=" bg-slate-700 md:min-h-screen md:fixed  h-full md:min-w-[320px] ">
      <div className="flex justify-between items-center md:border-b border-purple-500/50 px-4 md:px-[30px] h-20">
        <Link href={"/"} className="flex items-center gap-x-2 ">
          <FaRegPlayCircle className="text-2xl text-blue-500" />
          <h2 className="font-serif text-2xl italic ">MovieHub</h2>
        </Link>
        <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="font-light text-xl" />
        </button>
      </div>
      <div
        className={`space-y-1  absolute md:static bg-slate-700 h-full z-50  md:w-auto -left-80 transition-all duration-300 delay-100 ease-linear w-3/5 ${
          isOpen === true ? "left-[0px]" : "-left-[300px]"
        }`}
      >
        <div className="flex gap-x-2 items-center border-b border-purple-500/50 px-4 md:px-[30px] h-20">
          <div className="bg-slate-700 p-4 h-[52px] w-[52px] rounded-xl overflow-hidden block cursor-pointer relative">
            <Image
              src={"https://shorturl.at/uvIK9"}
              width={500}
              height={500}
              // src={user?.data?.user?.photoUrl}
              className="absolute bg-cover object-cover top-0 left-0"
              alt="user photo"
            />
          </div>
          <div className="">
            <small className="text-[10px] text-gray-200">Admin</small>
            <p className=" text-xl italic">Dewan Emon</p>
          </div>
          <button className="flex ml-auto px-4 bg-darkBlue/50 shadow py-2 rounded">
            <FaSignOutAlt className="text-xl " />
          </button>
        </div>
        <ul className="px-4 md:px-[30px]">
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                href={route.path}
                className={`font-semibold flex items-center gap-x-2 hover:text-red-600 font-mono py-2 rounded `}
              >
                <route.icon /> {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
