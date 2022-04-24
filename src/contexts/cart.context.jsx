import { createContext, useState } from "react";

export const CartContext = createContext({
	cartOpen: false,
	setCartOpen: () => null,
	cartItems: null,
	setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const value = { cartOpen, setCartOpen, cartItems, setCartItems };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
