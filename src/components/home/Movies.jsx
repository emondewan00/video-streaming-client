import React from "react";
import MovieCard from "../card/MovieCard";
const Movies = async ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
      {videos?.map((items) => (
        <div key={items._id}>
          <MovieCard video={items} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
