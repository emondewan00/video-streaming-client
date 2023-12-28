import { FaThumbsUp } from "react-icons/fa";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
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

const LikesAnalytics = () => {
  return (
    <div className=" h-[420px] md:h-[340px] bg-darkBlue rounded order-4 md:order-3">
      <div className="flex items-center justify-between p-5 border-b mb-4">
        <h2 className="flex items-center gap-x-2 text-xl">
          <FaThumbsUp />
          Likes Analytics
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
  );
};

export default LikesAnalytics;
