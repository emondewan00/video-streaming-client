import React from "react";
import MovieCart from "../cart/MovieCart";
const Movies = async ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4">
      {videos?.map((items) => (
        <div key={items._id}>
          <MovieCart video={items} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
