import {
  getAllProducts,
  getMakers,
  getCart,
  sendToCart,
  removeFromCart,
  addProductForUser,
  sendToProducts,
  removeFromProducts
} from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_MAKERS = "INIT_MAKERS";
// export const SELECT_MAKER = "SELECT_MAKER";
// export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const INIT_CART = "INIT_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_PRODUCT_FOR_USER = "ADD_PRODUCT_FOR_USER";
export const ADD_PRODUCT_FROM_CART = "ADD_PRODUCT_FROM_CART";
export const REMOVE_FROM_PRODUCTS = "REMOVE_FROM_PRODUCTS";

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
    await removeFromProducts(product.id);
    dispatch({
      type: REMOVE_FROM_PRODUCTS,
      payload: product.id,
    });
  };
};

export const remove = (tuote) => {
  return async (dispatch) => {

    await removeFromCart(tuote.id);
    dispatch({
      type: REMOVE_FROM_CART,
      payload: tuote.id,
    });
    const products = await sendToProducts(tuote);
    dispatch({
      type: ADD_PRODUCT_FROM_CART,
      data: products,
    });
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    const products = await addProductForUser();
    dispatch({
      type: ADD_PRODUCT_FOR_USER,
      data: products,
    });
  };
};

// export const restoreProduct = (product) => {
//   console.log("restore product");
//   return async (dispatch) => {
//     const products = await sendToProducts(product);
//     dispatch({
//       type: ADD_PRODUCT_FROM_CART,
//       data: products,
//     });
//   };
// };

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
