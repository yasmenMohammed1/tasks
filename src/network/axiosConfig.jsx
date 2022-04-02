
import axios from "axios";
// import Pager from '../components/Pager'

export const axiosInstance = axios.create({
    
  // baseURL: `https://api.themoviedb.org/3/movie/top_rated?api_key=def5e1ceb14524a4ee348997a1833042&language=en-US&page=${page}`,
    baseURL:`https://api.themoviedb.org/3`,
    params:{'api_key':'def5e1ceb14524a4ee348997a1833042'}
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    //   SHOW LOADER
    // console.log("INTERCEPTOR", config);
    // Do something before request is sent
    config.headers["Authorization"] =
      "Bearer def5e1ceb14524a4ee348997a1833042";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // HIDE LOADER
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // HIDE LOADER
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
