import { CartItem } from "./cart.types";

export interface CartState {
  cartOpen: boolean;
  cartItems: CartItem[];
}
export const CART_INITIAL_STATE = {
  cartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as any
): CartState => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "SET_CART_OPEN":
      return {
        ...state,
        cartOpen: action.payload,
      };
    default:
      return state;
  }
};
