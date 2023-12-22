"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaHistory, FaHome, FaThumbsUp, FaUser } from "react-icons/fa";

const UserLayout = ({ children }) => {
  const pathname = usePathname();
  const { currentUser } = useContext(AuthContext);
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

  // if (currentUser && user?.data?.user?.role !== "user") {
  //   return router.push("/");
  // }

  return (
    <>
      {/* {!user && (
        <div className="text-white h-[80vh] max-w-7xl mx-auto flex items-center justify-center">
          <h1 className="text-2xl ">lodding...</h1>
        </div>
      )} */}

      {
        <div className="max-w-7xl mx-auto  text-white my-10 p-6 md:p-0 h-auto md:min-h-[75vh]">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
            <div className=" min-w-[200px]">
              <ul className="space-y-1 ">
                <li>
                  <Link
                    href="/dashboard/user/library"
                    className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                      pathname === "/dashboard/user/library" &&
                      "bg-gray-400/20 text-sky-600"
                    }`}
                  >
                    <FaHome className="inline-block" /> Library
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/user/history"
                    className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                      pathname === "/dashboard/user/history" &&
                      "bg-gray-400/20 text-sky-600"
                    }`}
                  >
                    <FaHistory className="inline-block" /> History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/user/liked"
                    className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                      pathname === "/dashboard/user/liked" &&
                      "bg-gray-400/20 text-sky-600"
                    }`}
                  >
                    <FaThumbsUp className="inline-block" /> Liked Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/user/watchlater"
                    className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                      pathname === "/dashboard/user/watchlater" &&
                      "bg-gray-400/20 text-sky-600"
                    }`}
                  >
                    <FaHistory className="inline-block" /> Watch Later
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/user/account"
                    className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
                      pathname === "/dashboard/user/account" &&
                      "bg-gray-400/20 text-sky-600"
                    }`}
                  >
                    <FaUser className="inline-block" /> Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" space-y-3">{children}</div>
          </div>
        </div>
      }
    </>
  );
};

export default UserLayout;
