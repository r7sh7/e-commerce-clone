import { ADD_TO_CART } from "../constants";

export const addToCart = (item) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: item });
};
