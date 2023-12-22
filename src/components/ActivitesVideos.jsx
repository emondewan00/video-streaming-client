import React from "react";
import MovieCart from "./cart/MovieCart";

const ActivitesVideos = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4">
      {videos?.map((items) => (
        <div key={items._id}>
          <MovieCart video={items.video[0]} />
        </div>
      ))}
    </div>
  );
};

export default ActivitesVideos;
