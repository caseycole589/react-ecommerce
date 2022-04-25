import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

export const CartIcon = () => {
	const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);
	const handleClick = () => setCartOpen(!cartOpen);
	return (
		<div className="cart-icon-container" onClick={handleClick}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};
