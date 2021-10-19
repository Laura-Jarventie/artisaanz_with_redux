import * as actionTypes from "../actions/actions";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;

    default:
      return state;
  }
};

export default cartReducer;