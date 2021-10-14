import { getAll } from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
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
