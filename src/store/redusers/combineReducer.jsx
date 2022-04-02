import { combineReducers } from "redux";
import { FavouriteReducer } from "./favourite";
import { MovieList } from "./MovieList";
import {Count} from "./count"

export default combineReducers({
  favourite: FavouriteReducer,
  movieList:MovieList,
  count:Count
});


