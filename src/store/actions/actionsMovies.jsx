import { axiosInstance } from "../../network/axiosConfig";
export const  GET_MOVIE_LIST ="GET_MOVIE_LIST"

export const getMovieList = (page, lang) => (dispatch) => {
  return axiosInstance
    .get(`/movie/top_rated?language=${lang}-US&page=${page}`)
    .then((res) =>
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};