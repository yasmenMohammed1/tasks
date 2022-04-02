import { GET_MOVIE_LIST } from "../actions/actionsMovies";



export function MovieList(state = {}, action) {
  switch (action.type) {
    case  GET_MOVIE_LIST:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}