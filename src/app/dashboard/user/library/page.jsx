import ActivitesVideos from "@/components/ActivitesVideos";
import getHistorysLikesWatchLaterVideos from "@/utils/getHistorysLikesWatchLaterVideos";
import Link from "next/link";

const User = async () => {
  const historys = await getHistorysLikesWatchLaterVideos(
    "http://localhost:5000/history?email=admin@gmail.com&limit=4",
   
  );
  return (
    <div>
      <div>
        <div className="flex justify-between mb-4">
          <h1 className="text-xl">History</h1>
          <Link
            href={"/dashboard/user/history"}
            className="underline text-blue-600"
          >
            View All
          </Link>
        </div>
        <ActivitesVideos videos={historys?.data?.videos} />
      </div>
      <div>
        <div className="flex justify-between my-4">
          <h1 className="text-xl">Liked All</h1>
          <Link
            href={"/dashboard/user/liked"}
            className="underline text-blue-600"
          >
            View All
          </Link>
        </div>
        <ActivitesVideos videos={historys?.data?.videos} />
      </div>
      <div>
        <div className="flex justify-between my-4">
          <h1 className="text-xl">Watch Later</h1>
          <Link
            href={"/dashboard/user/watchlater"}
            className="underline text-blue-600"
          >
            View All
          </Link>
        </div>
        <ActivitesVideos videos={historys?.data?.videos} />
      </div>
    </div>
  );
};

export default User;
