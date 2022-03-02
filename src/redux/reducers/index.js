import { combineReducers } from "@reduxjs/toolkit";
import { user_reducer } from "./user.reducer";
import { cart_reducer } from "./cart.reducer";
import { favourite_reducer } from "./fav.reducer";
import { order_reducer } from "./order.reducer";

export const root_reducer = combineReducers({
  handle_user: user_reducer,
  handle_cart: cart_reducer,
  handle_favourites: favourite_reducer,
  handle_orders: order_reducer,
});
