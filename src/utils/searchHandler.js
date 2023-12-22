const searchHandler = (e, search, state) => {
  e.preventDefault();
  const getDataBySearchText = async () => {
    const res = await fetch(
      `http://localhost:5000/users/search?text=${search}`
    );
    const data = await res.json();
    state(data?.data?.result);
  };
  getDataBySearchText();
};

export default searchHandler;
