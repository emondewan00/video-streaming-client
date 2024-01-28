import MovieCart from "@/components/cart/MovieCart";
import getHistorysLikesWatchLaterVideos from "@/utils/getHistorysLikesWatchLaterVideos";
import React from "react";

const WatchLater = async () => {
  const historys = await getHistorysLikesWatchLaterVideos(
    "https://video-streaming-api.vercel.app/history?email=admin@gmail.com"
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

export default WatchLater;
