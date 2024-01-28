"use client";
import Header from "@/components/dashboard/admin/home/Header";
import LatestUsers from "@/components/dashboard/admin/home/LatestUsers";
import LikesAnalytics from "@/components/dashboard/admin/home/LikesAnalytics";
import TopVideos from "@/components/dashboard/admin/home/TopVideos";
import ViewsAnalytics from "@/components/dashboard/admin/home/ViewsAnalytics";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAward, FaEye, FaThumbsUp, FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { month: "Jan", views: 1200 },
  { month: "Feb", views: 1500 },
  { month: "Mar", views: 1800 },
  { month: "Apr", views: 1000 },
  { month: "May", views: 2200 },
  { month: "Jun", views: 2000 },
];

const AdminHome = () => {
  const [topVideos, setTopVideos] = useState([]);
  const [topUser, setTopUser] = useState([]);
  useEffect(() => {
    const getTopVideos = async () => {
      const res = await fetch(
        "https://video-streaming-api.vercel.app/videos?_sort=views&_order=desc&limit=5&page=1"
      );
      const user = await fetch(
        "https://video-streaming-api.vercel.app/users?_sort=createdAt&_order=desc&limitdocument=5"
      );
      const userResult = await user.json();
      setTopUser(userResult.data.users);
      const data = await res.json();
      setTopVideos(data.data.videos);
    };
    getTopVideos();
  }, []);

  return (
    <div className="my-4 md:my-0">
      {/* header */}
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 pt-4 md:mt-0 md:gap-8">
        {/* top videos  */}
        <TopVideos topVideos={topVideos} />
        {/* Views Analytics */}
        <ViewsAnalytics />
        {/* Likes Analytics */}
        <LikesAnalytics />
        {/* Latest users */}
        <LatestUsers topUser={topUser} />
      </div>
    </div>
  );
};

export default AdminHome;
