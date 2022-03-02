import { cart_constants } from "../constants/cart.constants";

const cart = [];

export const cart_reducer = (state = cart, action) => {
  switch (action.type) {
    case cart_constants.ADD_TO_CART:
      const in_cart = state.find((item) => item.id === action.payload.id);
      if (in_cart) {
        return state;
      }
      return [...state, action.payload];
    case cart_constants.REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload.id);
    case cart_constants.ADD_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product;
      });
    case cart_constants.DECREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }
        return product;
      });
    case cart_constants.CLEAR_CART:
      return [];
    default:
      return state;
  }
};
