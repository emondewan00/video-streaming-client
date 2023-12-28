"use client";
import Header from "@/components/dashboard/admin/videos/Header";
import VideoTable from "@/components/dashboard/admin/videos/VideoTable";
const AllVideos = () => {
  

  return (
    <div className="my-4 md:my-0">
      <Header />
      <VideoTable />
    </div>
  );
};

export default AllVideos;
