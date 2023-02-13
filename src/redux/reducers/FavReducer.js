import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialFavState = {
  content: [],
};

const favReducer = (state = initialFavState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        content: state.content.filter((el) => el._id !== action.payload),
      };
    default:
      return state;
  }
};

export default favReducer;
