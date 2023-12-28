import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const sortHandler = (text) => {
    if (text === "createdAt") {
      const sortedUsers = [...users].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return setUsers(sortedUsers);
    }
    if (text === "userName") {
      const sortedUsers = [...users].sort((a, b) =>
        a.userName.localeCompare(b.userName)
      );
      return setUsers(sortedUsers);
    }
  };
  return (
    <header className="flex justify-between items-center border-b border-gray-500 mb-4  h-20">
      <h1 className="text-3xl font-mono">
        All Users{" "}
        {/* <span className="text-sm text-gray-200">{users.length} total</span> */}
      </h1>
      <div className="flex items-center gap-x-2">
        <div className="">
          <label htmlFor="">Sort by: </label>
          <select
            name="sortBy"
            onChange={(e) => sortHandler(e.target.value)}
            defaultValue={"date"}
            className="text-black outline-none rounded"
          >
            <option defaultChecked hidden>
              Select
            </option>
            <option value="createdAt">Date</option>
            <option value="userName">Status</option>
          </select>
        </div>

        <form onSubmit={(e) => searchHandler(e, search, setUsers)}>
          <input
            className="w-full p-3 bg-slate-700/50 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Find Users..."
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
