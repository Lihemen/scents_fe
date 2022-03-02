import { order_constants } from "../constants/order.constants";

export const create_order = (order) => {
  return {
    type: order_constants.CREATE_ORDER,
    payload: order,
  };
};

export const update_order = ({ id, update }) => {
  return {
    type: order_constants.UPDATE_ORDER,
    payload: {
      id,
      update,
    },
  };
};

export const cancel_order = (id) => {
  return {
    type: order_constants.CANCEL_ORDER,
    payload: id,
  };
};
