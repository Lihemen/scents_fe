import { favourite_constants } from "../constants/fav.constants";

export const add_to_favourites = (product) => {
  return {
    type: favourite_constants.ADD_TO_FAVOURITES,
    payload: product,
  };
};

export const remove_from_favourites = (product) => {
  return {
    type: favourite_constants.REMOVE_FROM_FAVOURITES,
    payload: product,
  };
};
