import Link from "next/link";
import { FaAward } from "react-icons/fa";

const TopVideos = ({topVideos}) => {
  return (
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
  );
};

export default TopVideos;
