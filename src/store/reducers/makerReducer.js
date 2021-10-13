import * as actionTypes from "../actions/actions";

const makerReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_MAKERS:
      return action.data;

    default:
      return state;
  }
};

export default makerReducer;