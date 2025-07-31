import axios from "axios";

// 1. Create the instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // ✅ This runs before every request is sent

    console.log("👉 Sending request to:", config.url);

    // ✅ Add a fake token (just for learning)
    config.headers.Authorization = `Bearer faketoken123`;

    return config;
  },
  (error) => {
    // ✅ If something goes wrong before sending the request
    return Promise.reject(error);
  }
);

// 3. Export the instance
export default axiosInstance;

