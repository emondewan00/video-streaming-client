const postHistory = async (userData) => {
  try {
    const videos = await fetch(`http://localhost:5000/hisroty`, {
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
