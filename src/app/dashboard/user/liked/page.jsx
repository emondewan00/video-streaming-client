import MovieCart from "@/components/cart/MovieCart";
import getHistorysLikesWatchLaterVideos from "@/utils/getHistorysLikesWatchLaterVideos";
import React from "react";

const Likeds = async () => {
  const historys = await getHistorysLikesWatchLaterVideos(
    "http://localhost:5000/history?email=admin@gmail.com"
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {historys.data?.videos.map((item) => (
        <div key={item._id}>
          <MovieCart video={item.video[0]} />
        </div>
      ))}
    </div>
  );
};

export default Likeds;
