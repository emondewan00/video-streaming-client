"use client"
import ReactPlayer from "react-player";
const Player = ({ url = "https://youtu.be/yVYQeDhAQWk" }) => {
  return (
    <>
      <ReactPlayer width={"100%"} height={"100%"} controls={true} url={url} />
    </>
  );
};

export default Player;
