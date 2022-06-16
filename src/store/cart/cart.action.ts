import { createAction } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CartItem } from "./cart.types";

const addCartItem = (
  cartItems: CartItem[],
  product: CategoryItem
): CartItem[] => {
  const found = cartItems.find((item) => product.id === item.id);
  if (found) {
    return cartItems.map((obj) => {
      if (obj.id === found.id) {
        return { ...obj, quantity: obj.quantity + 1 };
      }
      return obj;
    });
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

const removeItemFromCart = (
  cartItems: CartItem[],
  itemToRemove: CategoryItem
): CartItem[] => {
  return cartItems
    .map((obj) => {
      if (obj.id === itemToRemove.id) {
        return { ...obj, quantity: obj.quantity - 1 };
      }
      return obj;
    })
    .filter((obj) => obj.quantity > 0);
};

const clearItemFromCart = (
  cartItems: CartItem[],
  itemToRemove: CategoryItem
): CartItem[] => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const setCartOpen = (cartOpen: boolean) =>
  createAction("SET_CART_OPEN", cartOpen);

export const addItemToCart = (product: CategoryItem, cartItems: CartItem[]) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction("SET_CART_ITEMS", newCartItems);
};

export const removeCartItem = (
  product: CategoryItem,
  cartItems: CartItem[]
) => {
  const newCartItems = removeItemFromCart(cartItems, product);
  return createAction("SET_CART_ITEMS", newCartItems);
};
export const clearCartItem = (product: CategoryItem, cartItems: CartItem[]) => {
  const newCartItems = clearItemFromCart(cartItems, product);
  return createAction("SET_CART_ITEMS", newCartItems);
};
