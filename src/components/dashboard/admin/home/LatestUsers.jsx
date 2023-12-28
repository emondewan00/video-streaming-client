import Link from "next/link";
import { FaUsers } from "react-icons/fa";

const LatestUsers = ({topUser}) => {
  return (
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
  );
};

export default LatestUsers;
