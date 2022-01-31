import { ADD_TO_CART } from "../constants";

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: 1 } });
};
