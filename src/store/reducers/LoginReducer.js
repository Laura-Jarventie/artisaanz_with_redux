import * as actionTypes from "../actions/actions";

const LoginReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_LOGIN:
      return action.data;
    case actionTypes.LOGIN_CHANGE:
      return action.data;
    default:
      return state;
  }
};

export default LoginReducer;
