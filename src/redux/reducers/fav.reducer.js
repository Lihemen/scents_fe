import { favourite_constants } from "../constants/fav.constants";

const favourites = [];

export const favourite_reducer = (state = favourites, action) => {
  switch (action.type) {
    case favourite_constants.ADD_FAVOURITE:
      const already_liked = state.find(
        (favourite) => favourite.id === action.payload.id
      );
      if (already_liked) {
        return state;
      }
      return [...state, action.payload];
    case favourite_constants.REMOVE_FAVOURITE:
      return state.filter((favourite) => favourite.id !== action.payload);
    default:
      return state;
  }
};
