import { user_constants } from "../constants/user.constants";

const user = {};

export const user_reducer = (state = user, action) => {
  switch (action.type) {
    case user_constants.LOGIN:
      return {};

    case user_constants.LOGOUT:
      return {};

    case user_constants.SIGN_UP:
      return {};

    case user_constants.UPDATE_USER:
      return {};

    case user_constants.DEACTIVATE_ACCOUNT:
      return {};

    case user_constants.FORGOT_PASSWORD:
      return {};

    case user_constants.RESET_PASSWORD:
      return {};

    case user_constants.CONFIRM_EMAIL:
      return {};

    default:
      return state;
  }
};
