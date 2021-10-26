import {
  getAllProducts,
  getMakers,
  getCart,
  sendToCart,
  removeFromCart,
} from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_MAKERS = "INIT_MAKERS";
// export const SELECT_MAKER = "SELECT_MAKER";
// export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const INIT_CART = "INIT_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await getAllProducts();
    dispatch({
      type: INIT_PRODUCTS,
      data: products,
    });
  };
};

export const initializeMakers = () => {
  return async (dispatch) => {
    const makers = await getMakers();
    dispatch({
      type: INIT_MAKERS,
      data: makers,
    });
  };
};

export const initializeCart = () => {
  return async (dispatch) => {
    const cart = await getCart();
    dispatch({
      type: INIT_CART,
      data: cart,
    });
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    const cart = await sendToCart(product);
    dispatch({
      type: ADD_TO_CART,
      data: cart,
    });
  };
};

export const remove = (id) => {
  console.log(id);
  return async (dispatch) => {
    await removeFromCart(id);
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };
};

// export const makerName = (makerName) => {
//   return (dispatch) => {
//     dispatch({
//       type: SELECT_MAKER,
//       data: makerName,
//     });
//   };
// };

// export const searchProduct = (nimi) => {
//   return async (dispatch) => {
//     dispatch({
//       type: SEARCH_PRODUCT,
//       data: nimi,
//     });
//   };
// };
