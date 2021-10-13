import { getAllProducts, getMakers } from "../../services/services";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_MAKERS = "INIT_MAKERS";

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