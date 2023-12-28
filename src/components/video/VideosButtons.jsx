import {
  FaDownload,
  FaHeart,
  FaShare,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

const VideosButtons = ({ id, isLike }) => {
  const email = "johndeo@gamil.com";
  //like handler
  const likeHandler = async () => {
    const res = await fetch(`http://localhost:5000/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ videoId: id, email, }),
    });
    const data = await res.json();
    console.log(data, "like respone");
  };

  //dislike handler
  const disLikeHandler = () => {};
  return (
    <>
      <div className="overflow-x-auto ">
        <div className="flex gap-x-4">
          <div className="bg-gray-600 py-2 px-3 text-sm rounded space-x-2 flex items-center">
            <button
              onClick={likeHandler}
              className=" flex items-center gap-x-1"
            >
              <FaThumbsUp className="text-blue-600 " />
              <span>500k</span>
            </button>
            <div className="border h-full"></div>
            <button
              onClick={disLikeHandler}
              className=" flex items-center gap-x-1"
            >
              <FaThumbsDown className="text-blue-600 " />
              <span>500k</span>
            </button>
          </div>
          <button className="bg-gray-600 py-2 px-3 text-sm  rounded flex gap-x-2 items-center">
            <FaShare />
          </button>
          <button className="bg-gray-600 py-2 px-3 text-sm  rounded flex gap-x-2 items-center">
            <FaDownload />
          </button>
          <button className="bg-gray-600 py-2 px-3 text-sm  rounded flex gap-x-2 items-center">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideosButtons;
