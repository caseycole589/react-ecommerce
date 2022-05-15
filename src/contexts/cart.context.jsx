import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
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

export const CartContext = createContext({});

const INITIAL_STATE = {
	cartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_CART_ITEMS":
			return {
				...state,
				...payload,
			};
		case "SET_CART_OPEN":
			return {
				...state,
				cartOpen: payload,
			};
		default:
			throw new Error("unhandled type" + type);
	}
};

export const CartProvider = ({ children }) => {
	const [{ cartItems, cartCount, cartTotal, cartOpen }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const setCartOpen = (cartOpen) => {
		dispatch(createAction("SET_CART_OPEN", cartOpen));
	};
	const addItemToCart = (product) => {
		const newCartItems = addCartItem(cartItems, product);
		updateCartItemsReducer(newCartItems);
	};
	const removeCartItem = (product) => {
		const newCartItems = removeItemFromCart(cartItems, product);
		updateCartItemsReducer(newCartItems);
	};
	const clearCartItem = (product) => {
		const newCartItems = clearItemFromCart(cartItems, product);
		updateCartItemsReducer(newCartItems);
	};

	const updateCartItemsReducer = (cartItems) => {
		const cartCount = cartItems.reduce((prev, current) => {
			return prev + current.quantity;
		}, 0);
		const cartTotal = cartItems.reduce((prev, current) => {
			return prev + current.quantity * current.price;
		}, 0);
		dispatch(
			createAction("SET_CART_ITEMS", {
				cartItems,
				cartCount,
				cartTotal,
				cartOpen,
			})
		);
	};
	const value = {
		cartOpen,
		setCartOpen,
		cartItems,
		addItemToCart,
		removeCartItem,
		clearCartItem,
		cartCount,
		cartTotal,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
