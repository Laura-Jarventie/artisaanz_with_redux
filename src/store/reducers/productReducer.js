import * as actionTypes from "../actions/actions";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.data;
      case actionTypes.SELECT_MAKER:
        let makers = [...state];
        const filterByMaker = makers.filter((item) => item.artesaani === action.data);
        return filterByMaker;

    default:
      return state;
  }
};

export default productReducer;
