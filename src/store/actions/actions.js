import { getAll } from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";

export const initializeProducts = () => {
    return async (dispatch) => {
      const products = await getAll();
      dispatch({
        type: INIT_PRODUCTS,
        data: products,
      });
    };
  };