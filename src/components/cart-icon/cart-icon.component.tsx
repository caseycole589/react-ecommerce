import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../store/cart/cart.action";
import {
	selectCartCount,
	selectCartOpen,
} from "../../store/cart/cart.selector";
import "./cart-icon.styles.scss";
//@ts-ignore
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useEffect } from "react";

export const CartIcon = () => {
	useEffect(() => {
		dispatch(setCartOpen(false));
	}, []);
	const dispatch = useDispatch();
	const cartOpen = useSelector(selectCartOpen);
	const cartCount = useSelector(selectCartCount);
	const handleClick = () => dispatch(setCartOpen(!cartOpen));
	return (
		<div className="cart-icon-container" onClick={handleClick}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};
