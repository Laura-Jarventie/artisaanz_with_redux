import * as actionTypes from "../actions/actions";

const singleProductReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SINGLE_PRODUCT:
      return action.data;

    default:
      return state;
  }
};

export default singleProductReducer;
