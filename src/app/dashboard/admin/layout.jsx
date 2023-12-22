"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
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

const AdimLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logOut } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const router = useRouter();
  const userEmail = currentUser?.email;

  useEffect(() => {
    if (!userEmail) return setUser(null);
    const getUser = async () => {
      const res = await fetch(`http://localhost:5000/users/${userEmail}`, {
        cache: "force-cache",
        next: {
          revalidate: 1000,
        },
      });
      const user = await res.json();
      setUser(user);
    };
    getUser();
  }, [userEmail]);
  if (user?.data?.user?.role === "user") return router.push("/");

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
    <div className=" mx-auto  text-white ">
      {/* grid grid-cols-1 md:grid-cols-6 gap-x-6 */}
      <div className="flex flex-col md:flex-row md:gap-x-4">
        {/* sidebar  */}
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
                  src={user?.data?.user?.photoUrl}
                  width={500}
                  height={500}
                  // src={user?.data?.user?.photoUrl}
                  className="absolute bg-cover object-cover top-0 left-0"
                  alt="user photo"
                />
              </div>
              <div className="">
                <small className="text-[10px] text-gray-200">Admin</small>
                <p className=" text-xl italic">
                  {user?.data?.user?.displayName}
                </p>
              </div>
              <button
                onClick={logOut}
                className="flex ml-auto px-4 bg-darkBlue/50 shadow py-2 rounded"
              >
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
        <div className="grow md:pl-[340px] md:pr-8 px-4">{children} </div>
      </div>
    </div>
  );
};

export default AdimLayout;
