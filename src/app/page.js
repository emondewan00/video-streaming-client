import Movies from "@/components/home/Movies";
import MovieTraile from "@/components/home/MovieTraile";
import Banner from "@/components/home/Banner";
import get4Videos from "@/utils/get4Videos";

export default async function Home() {
  const trandingVideos = await get4Videos("_sort=views&_order=desc");
  const latestMovies = await get4Videos("_sort=publicIn&_order=desc");
  const dramas = await get4Videos("category=Drama");

  return (
    <div className="">
      <div className="max-w-7xl mx-auto pb-10 px-4 md:px-0">
        <Banner />
        <div className="mt-10">
          <h1 className="text-4xl text-white uppercase mb-3">Tranding </h1>
          <Movies videos={trandingVideos?.data?.videos} />
        </div>
        <div className="mt-10">
          <h1 className="text-4xl text-white uppercase mb-3">Latest Video</h1>
          <Movies videos={latestMovies?.data?.videos} />
        </div>
        <MovieTraile />
        <div className="mt-10">
          <h1 className="text-4xl text-white uppercase mb-3">Drama</h1>
          <Movies videos={dramas?.data?.videos} />
        </div>
      </div>
    </div>
  );
}
