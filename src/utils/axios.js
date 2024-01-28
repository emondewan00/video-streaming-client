import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://video-streaming-api.vercel.app",
});

export default apiInstance