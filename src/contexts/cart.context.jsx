import {
	createContext,
	useState,
	useEffect,
	useReducer,
	dispatch,
} from "react";

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

export const CartContext = createContext({
	setCartOpen: () => {},
	addItemToCart: () => {},
	removeCartItem: () => {},
	clearCartItem: () => {},
});

const INITIAL_STATE = {
	cartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const cartReduce = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			throw new Error("unhandled type" + type);
	}
};

const AddToCart = (itemToAdd) => {
	dispatch({ type: "ADD_TO_CART", payload: itemToAdd });
};

export const CartProvider = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
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
		const newCartCount = cartItems.reduce((prev, current) => {
			return prev + current.quantity;
		}, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const total = cartItems.reduce((prev, current) => {
			return prev + current.quantity * current.price;
		}, 0);
		setCartTotal(total);
	}, [cartItems]);

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
