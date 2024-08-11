"use client";
import SideBar from "@/components/dashboard/admin/SideBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }) => {
  const [user, setUser] = useState("");
  const router = useRouter();

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

export default AdminLayout;
