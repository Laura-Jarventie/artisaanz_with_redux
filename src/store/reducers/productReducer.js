import * as actionTypes from "../actions/actions";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.data;

    case actionTypes.SEARCH_PRODUCT:
      const keyword = action.payload;
      return { ...state, keyword: keyword };

    default:
      return state;
  }
};

export default productReducer;
