import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions/actionFav";


const INITIAL_STATE = {
};

export function FavouriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        [action.payload.id]: {...action.payload}
      }

    case REMOVE_FROM_FAVOURITE:
        delete state[action.id]
      return {
        ...state,
      };
    default:
      return state;
  }
}