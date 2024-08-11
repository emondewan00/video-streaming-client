import MovieCard from "@/components/card/MovieCard";
import getHistorysLikesWatchLaterVideos from "@/utils/getHistorysLikesWatchLaterVideos";

const History = async () => {
  const historys = await getHistorysLikesWatchLaterVideos(
    "https://video-streaming-api.vercel.app/history?email=admin@gmail.com&limit=12"
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {historys.data?.videos.map((item) => (
        <div key={item._id}>
          <MovieCard video={item.video[0]} />
        </div>
      ))}
    </div>
  );
};

export default History;
