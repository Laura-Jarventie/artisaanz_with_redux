import { getAllProducts, getMakers, getSingleProduct } from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_MAKERS = "INIT_MAKERS";
export const SELECT_MAKER = "SELECT_MAKER";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const SINGLE_PRODUCT = "SINGLE_PRODUCT";

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

export const singleProduct = (id) => {
  return async (dispatch) => {
    const singleProductData = await getSingleProduct(id);
    dispatch({
      type: SINGLE_PRODUCT,
      data: singleProductData,
    });
  };
};

