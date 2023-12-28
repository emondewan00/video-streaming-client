import { FaEye } from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
    { month: "Jan", views: 1200 },
    { month: "Feb", views: 1500 },
    { month: "Mar", views: 1800 },
    { month: "Apr", views: 1000 },
    { month: "May", views: 2200 },
    { month: "Jun", views: 2000 },
  ];


const ViewsAnalytics = () => {
  return (
    <div className=" h-[420px] md:h-[340px] bg-darkBlue rounded ">
      <div className="flex items-center justify-between p-5 border-b mb-4">
        <h2 className="flex items-center gap-x-2 text-xl">
          <FaEye />
          Views Analytics
        </h2>
        <div className="text-black px-2">
          <select name="type" id="" className="outline-none rounded px-2 py-[]">
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
  );
};

export default ViewsAnalytics;
