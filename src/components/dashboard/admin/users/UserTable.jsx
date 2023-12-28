import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const UserTable = ({}) => {
  const [users, setUsers] = useState([]);
  const deleteUser = (id) => {
    const deleteU = async () => {
      const res = await fetch(`http://localhost:5000/users/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
    };
    deleteU();
  };

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      setUsers(data?.data?.users);
    };
    getUsers();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs all-videos text-white">
        <thead>
          <tr className="text-white">
            <th>Id</th>
            <th>Basic Info</th>
            <th>User Name</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Role</th>
            <th>CreatedAt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{user._id.slice(18)}</td>
              <td>
                <div className="flex items-center gap-3 ">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={500}
                        height={500}
                        src={user.photoUrl}
                        alt="User Photo"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold ">{user?.displayName}</div>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>
              <td>{user.userName}</td>
              <td>{user.comments}</td>
              <td
                className={`${
                  user.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.status}
              </td>
              <td>{user.role}</td>
              <td>{moment(user.createdAt).format("D MMM YYYY")}</td>
              <td className="flex gap-x-2">
                <button className="p-2 rounded bg-[#eb57574a] ">Ban</button>
                <button
                  onClick={() => deleteUser(user._id)}
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

export default UserTable;
