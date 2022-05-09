import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {
	ShoppingIcon,
	CartIconContainer,
	ItemCount,
} from "./cart-icon.styles.jsx";

export const CartIcon = () => {
	const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);
	const handleClick = () => setCartOpen(!cartOpen);
	return (
		<CartIconContainer onClick={handleClick}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};
