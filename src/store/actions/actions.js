import { getAllProducts, getMakers } from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
<<<<<<< HEAD
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await getAll();
    dispatch({
      type: INIT_PRODUCTS,
      data: products,
    });
  };
};

export const searchProduct = (keyword) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_PRODUCT,
      payload: keyword,
    });
  };
};
=======
export const INIT_MAKERS = "INIT_MAKERS";
export const SELECT_MAKER = "SELECT_MAKER";

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

export const makerName = (makerName) => {
    return (dispatch) => {
      dispatch({
        type: SELECT_MAKER,
        data: makerName,
      });
    };
  };
>>>>>>> b0e4b8d8af2a94d5fdc84b0b2c8a03df39d6affa
