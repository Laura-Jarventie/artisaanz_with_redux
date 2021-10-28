import * as actionTypes from "../actions/actions";

const productReducer = (state = [], action) => {
  let updatedProducts;
  let updatedItemIndex;

  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.data;

      case actionTypes.ADD_PRODUCT_FROM_CART:
      updatedProducts = [...state];
      // console.log(action.data);
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
        console.log(updatedItemIndex);
        return updatedProducts;
    // case actionTypes.SELECT_MAKER:
    //   let makers = [...state];
    //   const filterByMaker = makers.filter(
    //     (item) => item.artesaani === action.data
    //   );
    //   return filterByMaker;

    // case actionTypes.SEARCH_PRODUCT:
    //   const keyword = action.payload;
    //   return { ...state, keyword: keyword };

    default:
      return state;
  }
};

export default productReducer;
