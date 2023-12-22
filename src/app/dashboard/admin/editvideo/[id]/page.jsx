import VideoForm from "@/components/VideoForm";
import React from "react";

const EditVideo = ({ params }) => {
  return (
    <div>
      <VideoForm videoId={params.id} />
    </div>
  );
};

export default EditVideo;
