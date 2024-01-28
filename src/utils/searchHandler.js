const searchHandler = (e, search, state) => {
  e.preventDefault();
  const getDataBySearchText = async () => {
    const res = await fetch(
      `https://video-streaming-api.vercel.app/users/search?text=${search}`
    );
    const data = await res.json();
    state(data?.data?.result);
  };
  getDataBySearchText();
};

export default searchHandler;
