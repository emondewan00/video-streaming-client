"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import Menu from "@/components/dashboard/user/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaHistory, FaHome, FaThumbsUp, FaUser } from "react-icons/fa";

const UserLayout = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const router = useRouter();
  const userEmail = currentUser?.email;

  useEffect(() => {
    if (!userEmail) return setUser(null);
    const getUser = async () => {
      const res = await fetch(`https://video-streaming-api.vercel.app/users/${userEmail}`, {
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
            {/* user dashboard menues */}
            <Menu />
            <div className=" space-y-3 grow">{children}</div>
          </div>
        </div>
      }
    </>
  );
};

export default UserLayout;
