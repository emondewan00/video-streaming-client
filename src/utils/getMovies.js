const getMovies = async (limit) => {
  try {
    const videos = await fetch(
      `https://video-streaming-api.vercel.app/videos?fields=-__v,-createdAt${limit}`,
      {cache:"no-cache"}
    );
    const result = await videos.json();
    return result;
  } catch (error) {
    return error;
  }
};
export default getMovies;
