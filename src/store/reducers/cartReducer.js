import * as actionTypes from "../actions/actions";

const cartReducer = (state = [], action) => {
  let updatedCart;

  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_TO_CART:
      updatedCart = [...state];
      updatedCart.push({
        ...action.payload,
      });
      return updatedCart;

    default:
      return state;
  }
};

export default cartReducer;
