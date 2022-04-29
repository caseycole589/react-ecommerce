import { createContext, useState, useEffect } from "react";

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
	return cartItems.map((obj) => {
		if (obj.id === itemToRemove.id && obj.quantity > 0) {
			return { ...obj, quantity: obj.quantity - 1 };
		}
		return obj;
	});
};

const clearItemFromCart = (cartItems, itemToRemove) => {
	return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const CartContext = createContext({
	cartOpen: false,
	setCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeCartItem: () => {},
	clearCartItem: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const addItemToCart = (product) => {
		setCartItems(addCartItem(cartItems, product));
	};
	const removeCartItem = (product) => {
		console.log(product);
		setCartItems(removeItemFromCart(cartItems, product));
	};
	const clearCartItem = (product) => {
		setCartItems(clearItemFromCart(cartItems, product));
	};
	//my solution was way cleaner
	useEffect(() => {
		const newCartCount = cartItems.reduce((prev, curr) => {
			return prev + curr.quantity;
		}, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	const value = {
		cartOpen,
		setCartOpen,
		cartItems,
		addItemToCart,
		removeCartItem,
		clearCartItem,
		cartCount,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
