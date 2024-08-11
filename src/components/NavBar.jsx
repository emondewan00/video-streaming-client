"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaRegPlayCircle,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaUserCog,
} from "react-icons/fa";

const NavBar = () => {
  //this state use for control in mobile device nav items show and hide
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="shadow-2xl text-white">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-4 md:p-0">
        <Link href={"/"} className="flex items-center gap-x-2">
          <FaRegPlayCircle className="text-2xl text-blue-500" />
          <h2 className="font-serif text-2xl italic ">MovieHub</h2>
        </Link>
        <div
          className={`absolute ${
            isOpen === true ? "top-[83px] bg-darkBlue" : "-top-[400px]"
          }  md:static  w-full md:w-auto left-0 transition-all duration-300 delay-300 ease-in z-40 md:block `}
        >
          <ul className="menu-cs flex md:flex-row flex-col">
            <li className="menu-item">
              <Link href="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link href="/videos">Videos</Link>
            </li>
            <li className="menu-item">
              <Link href="/pricing">Prices</Link>
            </li>
            <li className="menu-item">
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="  flex gap-x-3 items-center relative ">
          {/* notification */}
          <div className="relative">
            <label
              htmlFor="notification-popup"
              className="cursor-pointer hover:outline transition-all duration-200 delay-75 ease-linear block p-2  rounded-full"
            >
              <FaBell className="text-xl font-bold " />
            </label>
            <input
              type="checkbox"
              className="hidden peer"
              id="notification-popup"
            />
            {/* notification list  */}
            <div className="absolute rounded text-black top-[52px] -right-[75px] before:content-[''] before:w-5 before:h-5 before:bg-blue-600  before:-z-10 before:absolute before:-top-[10px] bg-blue-600 before:right-20 before:rotate-45 min-w-[300px] peer-checked:block hidden transition-all duration-300 delay-100 ease-linear z-50 ">
              <div className="flex gap-x-2 px-4 py-3 hover:bg-black/10 relative z-30">
                <img
                  className="h-12 w-12 bg-cover object-contain rounded-full"
                  src="https://shorturl.at/ajAW7"
                  alt=""
                />
                <div className="text-white">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p className="text-sm text-slate-300">11 hours ago</p>
                </div>
              </div>
              <div className="flex gap-x-2 px-4 py-3 hover:bg-black/10 relative z-30">
                <img
                  className="h-12 w-12 bg-cover object-contain rounded-full"
                  src="https://shorturl.at/ajAW7"
                  alt=""
                />
                <div className="text-white">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p className="text-sm text-slate-300">11 hours ago</p>
                </div>
              </div>
              <div className="flex gap-x-2 px-4 py-3 hover:bg-black/10 relative z-30">
                <img
                  className="h-12 w-12 bg-cover object-contain rounded-full"
                  src="https://shorturl.at/ajAW7"
                  alt=""
                />
                <div className="text-white">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p className="text-sm text-slate-300">11 hours ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* user  */}

          <div className="relative ">
            <label
              htmlFor="user-popup"
              className="bg-slate-700 p-4 h-[52px] w-[52px] rounded-full overflow-hidden block cursor-pointer relative"
            >
              {/* {currentUser?.photoURL && (
                <Image
                  width={500}
                  height={500}
                  src={"https://i.ibb.co/ckt3Wxg/emon.jpg"}
                  className="absolute bg-cover object-cover top-0 left-0"
                  alt="user photo"
                />
              )}
              {!currentUser?.photoURL && (
                <FaUser className="text-xl font-bold" />
              )} */}
            </label>
            <input type="checkbox" className="hidden peer" id="user-popup" />
            {/* user details list  */}
            <div className="absolute shadow-2xl rounded top-[70px] right-0 before:content-[''] before:w-5 before:h-5 before:bg-blue-600 before:absolute before:-top-[10px] bg-blue-600 before:right-4 before:rotate-45 min-w-[200px] peer-checked:block hidden transition-all duration-300 delay-100 ease-linear z-30">
              <ul className=" relative">
                <li className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear  ">
                  <Link
                    href="/dashboard/user/library"
                    className="flex items-center gap-x-2"
                  >
                    <FaUser /> User Panel
                  </Link>
                </li>
                <li className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear  ">
                  <Link
                    href="/dashboard/admin/home"
                    className="flex items-center gap-x-2"
                  >
                    <FaUserCog /> Admn Panel
                  </Link>
                </li>
                {/* {!currentUser && (
                  <>
                    <li className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear  ">
                      <Link href="/login" className="flex items-center gap-x-2">
                        <FaSignInAlt /> Login
                      </Link>
                    </li>
                    <li className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear">
                      <Link
                        href="/register"
                        className="flex items-center gap-x-2"
                      >
                        <FaUser /> Register
                      </Link>
                    </li>
                  </>
                )}
                {currentUser && (
                  <li
                    onClick={() => logOutHandler()}
                    className="px-3 py-[10px] hover:bg-black/10 transition-all duration-300 delay-100 ease-linear"
                  >
                    <button className="flex items-center gap-x-2">
                      <FaSignOutAlt /> Log Out
                    </button>
                  </li>
                )} */}
              </ul>
            </div>
          </div>
          <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="font-light text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
