const get4Videos = async (url) => {
  try {
    const videos = await fetch(
      `https://video-streaming-api.vercel.app/videos?${url}&limitdocument=4`,
      {  cache: "no-store" }
    );
    const result = await videos.json();
    return result;
  } catch (error) {
    return error;
  }
};
export default get4Videos;
