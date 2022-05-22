export const CART_INITIAL_STATE = {
	cartOpen: false,
	cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_CART_ITEMS":
			return {
				...state,
				cartItems: payload,
			};
		case "SET_CART_OPEN":
			return {
				...state,
				cartOpen: payload,
			};
		default:
			return state;
	}
};
