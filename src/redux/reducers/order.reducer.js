import { order_constants } from "../constants/order.constants";

const orders = [];

export const order_reducer = (state = orders, action) => {
  switch (action.type) {
    case order_constants.CREATE_ORDER:
      return {};
    default:
      return state;
  }
};
