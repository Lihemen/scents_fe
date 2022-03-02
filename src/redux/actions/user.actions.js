import { user_constants } from "../constants/user.constants";

export const login = (user) => {
  return {
    type: user_constants.LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: user_constants.LOGOUT,
  };
};

export const signup = (user) => {
  return {
    type: user_constants.SIGN_UP,
    payload: user,
  };
};

export const deactivate_account = (user) => {
  return {
    type: user_constants.DEACTIVATE_ACCOUNT,
    payload: user,
  };
};

export const reset_password = ({ old_password, new_password }) => {
  return {
    type: user_constants.RESET_PASSWORD,
    payload: {
      old_password,
      new_password,
    },
  };
};

export const forgot_password = (email) => {
  return {
    type: user_constants.FORGOT_PASSWORD,
    payload: email,
  };
};

export const confirm_email = (code) => {
  return {
    type: user_constants.CONFIRM_EMAIL,
    payload: code,
  };
};

export const update_user = (update) => {
  return {
    type: user_constants.UPDATE_USER,
    payload: update,
  };
};
