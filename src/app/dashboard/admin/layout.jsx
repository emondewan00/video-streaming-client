"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import SideBar from "@/components/dashboard/admin/SideBar";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const AdimLayout = ({ children }) => {
  const { currentUser, logOut } = useContext(AuthContext);
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

  if (user?.data?.user?.role === "user") return router.push("/");

  return (
    <div className=" mx-auto  text-white ">
      {/* grid grid-cols-1 md:grid-cols-6 gap-x-6 */}
      <div className="flex flex-col md:flex-row md:gap-x-4">
        {/* sidebar  */}
        <SideBar />
        <div className="grow md:pl-[340px] md:pr-8 px-4">{children} </div>
      </div>
    </div>
  );
};

export default AdimLayout;
