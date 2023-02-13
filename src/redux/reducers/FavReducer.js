import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialFavState = [];

const FavReducer = (state = initialFavState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return [...state, action.payload];
    case REMOVE_FROM_FAV:
      return state.filter((el) => el._id !== action.payload);
    default:
      return state;
  }
};

export default FavReducer;
