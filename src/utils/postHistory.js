const postHistory = async (userData) => {
  try {
    const videos = await fetch(`https://video-streaming-api.vercel.app/hisroty`, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const result = await videos.json();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default postHistory;
