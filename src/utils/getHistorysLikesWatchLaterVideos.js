const getHistorysLikesWatchLaterVideos = async (url) => {
  try {
    const videos = await fetch(
     url,
      {  cache: "no-store" }
    );
    const result = await videos.json();
    return result;
  } catch (error) {
    return error;
  }
};
export default getHistorysLikesWatchLaterVideos;
