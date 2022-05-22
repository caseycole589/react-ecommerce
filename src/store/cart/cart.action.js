import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, product) => {
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

const removeItemFromCart = (cartItems, itemToRemove) => {
	return cartItems
		.map((obj) => {
			if (obj.id === itemToRemove.id) {
				return { ...obj, quantity: obj.quantity - 1 };
			}
			return obj;
		})
		.filter((obj) => obj.quantity > 0);
};

const clearItemFromCart = (cartItems, itemToRemove) => {
	return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const setCartOpen = (cartOpen) =>
	createAction("SET_CART_OPEN", cartOpen);

export const addItemToCart = (product, cartItems) => {
	const newCartItems = addCartItem(cartItems, product);
	return createAction("SET_CART_ITEMS", newCartItems);
};

export const removeCartItem = (product, cartItems) => {
	const newCartItems = removeItemFromCart(cartItems, product);
	return createAction("SET_CART_ITEMS", newCartItems);
};
export const clearCartItem = (product, cartItems) => {
	const newCartItems = clearItemFromCart(cartItems, product);
	return createAction("SET_CART_ITEMS", newCartItems);
};
