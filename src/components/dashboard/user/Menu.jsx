import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHistory, FaHome, FaThumbsUp, FaUser } from "react-icons/fa";

const Menu = () => {
    const pathname = usePathname();
  return (
    <div className=" min-w-[200px]">
      <ul className="space-y-1 ">
        <li>
          <Link
            href="/dashboard/user/library"
            className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
              pathname === "/dashboard/user/library" &&
              "bg-gray-400/20 text-sky-600"
            }`}
          >
            <FaHome className="inline-block" /> Library
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user/history"
            className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
              pathname === "/dashboard/user/history" &&
              "bg-gray-400/20 text-sky-600"
            }`}
          >
            <FaHistory className="inline-block" /> History
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user/liked"
            className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
              pathname === "/dashboard/user/liked" &&
              "bg-gray-400/20 text-sky-600"
            }`}
          >
            <FaThumbsUp className="inline-block" /> Liked Videos
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user/watchlater"
            className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
              pathname === "/dashboard/user/watchlater" &&
              "bg-gray-400/20 text-sky-600"
            }`}
          >
            <FaHistory className="inline-block" /> Watch Later
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user/account"
            className={`font-semibold block hover:text-sky-600 font-mono hover:bg-gray-400/20 pl-4 py-2 rounded ${
              pathname === "/dashboard/user/account" &&
              "bg-gray-400/20 text-sky-600"
            }`}
          >
            <FaUser className="inline-block" /> Account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
