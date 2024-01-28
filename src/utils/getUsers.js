const getUsers = async () => {
  try {
    const videos = await fetch(`https://video-streaming-api.vercel.app/users`, {
      next: { revalidate: 1000 },
    });
    const result = await videos.json();
    return result;
  } catch (error) {
    return error;
  }
};
export default getUsers;
