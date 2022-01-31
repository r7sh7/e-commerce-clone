import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initState = {
  cart: {
    cartItems: [],
  },
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.id === existItem.id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      const itemsCount = cartItems.reduce((a, c) => a + c.quantity, 0);

      return {
        ...state,
        cart: { ...state.cart, cartItems, itemsCount },
      };
    }
    case REMOVE_FROM_CART: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const itemsCount = cartItems.reduce((a, c) => a + c.quantity, 0);
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
          itemsCount,
        },
      };
    }
    default:
      return state;
  }
};
