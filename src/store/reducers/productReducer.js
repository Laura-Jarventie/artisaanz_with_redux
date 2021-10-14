import * as actionTypes from "../actions/actions";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.data;
      case actionTypes.SELECT_MAKER:
        let makers = [...state];
        const filterByMaker = makers.filter((item) => item.artesaani === action.data);
        return filterByMaker;

    case actionTypes.SEARCH_PRODUCT:
      const keyword = action.payload;
      return { ...state, keyword: keyword };

    default:
      return state;
  }
};

export default productReducer;
