import moment from "moment";
import { useState } from "react";

const ViewsAndDesc = ({ video }) => {
  const [fullText, setFullText] = useState(false);

  const textSlice =
    fullText === false ? video?.description?.slice(0, 110) : video?.description;
  return (
    <>
      {/* views and description */}
      <div className="mt-4 bg-slate-700/40 p-2 rounded order-1">
        <h3 className="text-lg md:hidden block">
          Lorem ipsum dolor sit amet consectetur hello test
        </h3>
        <p className="text-sm">
          {video?.views} views{" "}
          <span className="text-red-500">
            {moment(video?.publicIn).format("D MMM YY")}
          </span>
        </p>
        <p
          className={`mt-2 delay-200 duration-200 md:block hidden`}
          onClick={() => setFullText(!fullText)}
        >
          {textSlice}
          {fullText !== true && <span className="text-blue-600 ">...more</span>}
        </p>
      </div>
    </>
  );
};

export default ViewsAndDesc;
