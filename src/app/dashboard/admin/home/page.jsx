"use client";
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
        "http://localhost:5000/videos?_sort=views&_order=desc&limit=5&page=1"
      );
      const user = await fetch(
        "http://localhost:5000/users?_sort=createdAt&_order=desc&limitdocument=5"
      );
      const userResult = await user.json();
      setTopUser(userResult.data.users);
      const data = await res.json();
      setTopVideos(data.data.videos);
    };
    getTopVideos();
  }, []);

  console.log(topUser);
  return (
    <div className="my-4 md:my-0">
      <header className="flex justify-between items-center border-b border-gray-500 mb-4  h-20">
        <h1 className="text-3xl font-mono">Dashboard</h1>
        <Link
          href="/dashboard/admin/addvideo"
          className="uppercase py-2 px-4 bg-gradient-to-tl from-pink-600 to-slate-700 rounded"
        >
          Add Item
        </Link>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 pt-4 md:mt-0 md:gap-8">
        {/* top videos  */}
        <div className="h-fit md:h-[340px] bg-darkBlue rounded">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="flex items-center gap-x-2 text-xl">
              <FaAward />
              Top Videos
            </h2>
            <Link href="/dashboard/admin/videos" className="">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white">
                  <th>Id</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {topVideos.map((video) => (
                  <tr key={video._id}>
                    <td>{video._id.slice(18)}</td>
                    <td>{video.title}</td>
                    <td>{video.category}</td>
                    <td>{video.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Views Analytics */}
        <div className=" h-[420px] md:h-[340px] bg-darkBlue rounded ">
          <div className="flex items-center justify-between p-5 border-b mb-4">
            <h2 className="flex items-center gap-x-2 text-xl">
              <FaEye />
              Views Analytics
            </h2>
            <div className="text-black px-2">
              <select
                name="type"
                id=""
                className="outline-none rounded px-2 py-[]"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer
            width="90%"
            height="75%"
            style={{ margin: "0 auto" }}
          >
            <BarChart width={500} height={800} data={data}>
              <CartesianGrid />
              <XAxis dataKey="month" />
              <YAxis tickCount={5} />
              <Legend />
              <Bar dataKey="views" barSize={20} fill="#8884d8" />
              <Line type="monotone" dataKey="views" stroke="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Likes Analytics */}
        <div className=" h-[420px] md:h-[340px] bg-darkBlue rounded order-4 md:order-3">
          <div className="flex items-center justify-between p-5 border-b mb-4">
            <h2 className="flex items-center gap-x-2 text-xl">
              <FaThumbsUp />
              Likes Analytics
            </h2>
            <div className="text-black px-2">
              <select
                name="type"
                id=""
                className="outline-none rounded px-2 py-[]"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer
            width="90%"
            height="75%"
            style={{ margin: "0 auto" }}
          >
            <AreaChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* Latest users */}
        <div className="h-fit md:h-[340px] bg-darkBlue rounded order-3 md:order-4">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="flex items-center gap-x-2 text-xl">
              <FaUsers />
              Latest users
            </h2>
            <Link href="/dashboard/admin/users" className="">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white">
                  <th>Id</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>User Name</th>
                </tr>
              </thead>
              <tbody>
                {topUser.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id.slice(18)}</td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>{user.userName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
