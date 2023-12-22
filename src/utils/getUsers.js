const getUsers = async () => {
  try {
    const videos = await fetch(`http://localhost:5000/users`, {
      next: { revalidate: 1000 },
    });
    const result = await videos.json();
    return result;
  } catch (error) {
    return error;
  }
};
export default getUsers;
