import { ADD_TO_CART, CART_ITEM_REQUEST, REMOVE_FROM_CART } from "../constants";

const initState = {
  items: [],
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    // case REMOVE_FROM_CART:
    //     return {
    //         ...state,
    //     }
    default:
      return state;
  }
};
