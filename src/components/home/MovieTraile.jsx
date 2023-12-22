import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("@/components/Player"), { ssr: false });

const MovieTraile = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-x-8 my-4">
      <div className="md:w-2/3 md:h-[50vh]">
        <NoSSR />
      </div>
      <div className="flex items-center text-white md:w-1/3">
        <div className="space-y-2">
          <h1 className="text-2xl">
            BANGLADESH 12K HDR 120fps Dolby Vision with Calming Music
          </h1>
          <p className="text-sm ">
            20k views. <span className="text-secondary"> 2 weeks ago</span>
          </p>
          <p>
            Immerse yourself in the breathtaking beauty of Bangladesh with our
            mesmerizing video in stunning 12K resolution. The High Dynamic Range
            (HDR) and silky smooth 120 frames per second (fps) bring every
            detail to life, ensuring an unparalleled visual feast for your
            senses.
          </p>
          <button className="px-7 py-3 rounded bg-secondary"> Watch</button>
        </div>
      </div>
    </div>
  );
};

export default MovieTraile;
