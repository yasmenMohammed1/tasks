import { axiosInstance } from "./axiosConfig";

export const getMovieDetails = (id, lng) => {

  return axiosInstance.get(`/movie/${id}?language=${lng}`);
};

export const getMovies = () => {
  return axiosInstance.get(`/movies`);
};

export const _getSearchMovies = (searchText) => {
  return axiosInstance.get(`/search/movie?query=${searchText}`);
};

