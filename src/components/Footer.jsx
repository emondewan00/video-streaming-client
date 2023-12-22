"use client"
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  if (path.includes("admin")) return;
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-6 py-10">
        <div className="">
          <h1 className="text-4xl">MovieHub</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, in. Sit
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Expolre </h1>
          <ul className="list-disc list-inside">
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href=""></a>Tv Shows
            </li>
            <li>
              <a href="">Video</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">Company </h1>
          <ul className="list-disc list-inside">
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href=""></a>Terms of Use
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Our Team</a>
            </li>
          </ul>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
