import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../utils/localStorage";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from "../constants";

const initState = {
  cart: {
    cartItems: getLocalStorageData("cartItems") || [],
    shippingAddress: getLocalStorageData("shippingAddress") || {},
    paymentMethod: getLocalStorageData("paymentMethod") || [],
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
      setLocalStorageData("cartItems", cartItems);
      return {
        ...state,
        cart: { ...state.cart, cartItems },
      };
    }
    case REMOVE_FROM_CART: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      setLocalStorageData("cartItems", cartItems);
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };
    }

    case SAVE_SHIPPING_ADDRESS: {
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };
    }
    case SAVE_PAYMENT_METHOD: {
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    }
    case EMPTY_CART: {
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [],
        },
      };
    }

    default:
      return state;
  }
};
