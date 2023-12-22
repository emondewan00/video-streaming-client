const getMovies = async (limit) => {
  try {
    const videos = await fetch(
      `http://localhost:5000/videos?fields=-__v,-createdAt${limit}`,
      {cache:"no-cache"}
    );
    const result = await videos.json();
    return result;
  } catch (error) {
    return error;
  }
};
export default getMovies;
