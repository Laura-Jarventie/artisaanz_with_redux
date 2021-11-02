import * as actionTypes from "../actions/actions";

const productReducer = (state = [], action) => {
  let updatedProducts;
  let updatedItemIndex;

  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.data;

    case actionTypes.ADD_PRODUCT_FROM_CART:
      updatedProducts = [...state];
      updatedProducts.push({
        ...action.data,
      });
      return updatedProducts;

    case actionTypes.REMOVE_FROM_PRODUCTS:
      updatedProducts = [...state];
      updatedItemIndex = updatedProducts.findIndex(
        (item) => item.id === action.payload
      );
      updatedProducts.splice(updatedItemIndex, 1);
      return updatedProducts;

    default:
      return state;
  }
};

export default productReducer;
