"use client";
import Menu from "@/components/dashboard/user/Menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHistory, FaHome, FaThumbsUp, FaUser } from "react-icons/fa";

const UserLayout = ({ children }) => {
  const [user, setUser] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="max-w-7xl mx-auto  text-white my-10 p-6 md:p-0 h-auto md:min-h-[75vh]">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          {/* user dashboard menues */}
          <Menu />
          <div className=" space-y-3 grow">{children}</div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
