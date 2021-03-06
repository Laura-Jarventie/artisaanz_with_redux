import {
  getAllProducts,
  getMakers,
  getCart,
  sendToCart,
  removeFromCart,
  addProductForUser,
  sendToProducts,
  removeFromProducts,
} from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_MAKERS = "INIT_MAKERS";
export const INIT_CART = "INIT_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_PRODUCT_FOR_USER = "ADD_PRODUCT_FOR_USER";
export const ADD_PRODUCT_FROM_CART = "ADD_PRODUCT_FROM_CART";
export const REMOVE_FROM_PRODUCTS = "REMOVE_FROM_PRODUCTS";
export const INIT_LOGIN = "INIT_LOGIN";
export const LOGIN_CHANGE = "LOGIN_CHANGE";

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

export const initializeLogin = () => {
  return (dispatch) => {
    const navigation = "Kirjaudu";
    dispatch({
      type: INIT_LOGIN,
      data: navigation,
    });
  };
};

export const changeLogin = () => {
  return (dispatch) => {
    const navigation = "Kirjaudu ulos";
    dispatch({
      type: LOGIN_CHANGE,
      data: navigation,
    });
  };
};
