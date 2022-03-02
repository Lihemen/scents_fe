import { cart_constants } from "../constants/cart.constants";

export const add_to_cart = (product) => {
  return {
    type: cart_constants.ADD_TO_CART,
    payload: product,
  };
};

export const remove_from_cart = (id) => {
  return {
    type: cart_constants.REMOVE_FROM_CART,
    payload: id,
  };
};

export const add_quantity = (id) => {
  return {
    type: cart_constants.ADD_QUANTITY,
    payload: id,
  };
};

export const decrease_quantity = (id) => {
  return {
    type: cart_constants.DECREASE_QUANTITY,
    payload: id,
  };
};

export const clear_cart = () => {
  return {
    type: cart_constants.CLEAR_CART,
  };
};
