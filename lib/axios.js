import axios from "axios";

axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = "Bearer your-access-token";

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Request is being sent:", config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.error("Error occurred while sending request:", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log("Response received:", response);
    return response;
  },
  function (error) {
    // Do something with response error
    console.error("Error occurred while receiving response:", error);
    return Promise.reject(error);
  }
);

export default axios;
