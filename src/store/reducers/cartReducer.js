import * as actionTypes from "../actions/actions";

const cartReducer = (state = [], action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_TO_CART:
      updatedCart = [...state];
      updatedCart.push({
        ...action.payload,
      });
      return updatedCart;

      case actionTypes.REMOVE_FROM_CART:

        updatedCart = [...state];
  
        updatedItemIndex = updatedCart.findIndex(
          (item) => item.id === action.payload.id
        );
          updatedCart.splice(updatedItemIndex, 1);
        console.log(updatedCart);
        return updatedCart;

    default:
      return state;
  }
};

export default cartReducer;
