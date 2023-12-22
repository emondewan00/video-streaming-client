import moment from "moment";
import Link from "next/link";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const VideoTable = ({ videos }) => {
  const deleteVideo = (id) => {
    const deleteV = async () => {
      const res = await fetch(`http://localhost:5000/videos/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
    };
    deleteV();
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs all-videos text-white">
        <thead>
          <tr className="text-white">
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Views</th>
            <th>Status</th>
            <th>CreatedAt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {videos?.map((video) => (
            <tr key={video._id}>
              <th>{video._id.slice(18)}</th>
              <td>{video.title}</td>
              <td>{video.category}</td>
              <td>{video.views}</td>
              <td
                className={`${
                  video.visibility === "visible"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {video.visibility}
              </td>
              <td>{moment(video.createdAt).format("D MMM YYYY")}</td>
              <td className="flex gap-x-2">
                <Link
                  href={`/dashboard/admin/editvideo/${video._id}`}
                  className="p-2 rounded bg-blue-600/50 "
                >
                  <FaPen />
                </Link>
                <button
                  onClick={() => deleteVideo(video._id)}
                  className="p-2 rounded bg-[#eb57574a] "
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTable;
