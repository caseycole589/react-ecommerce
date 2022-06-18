import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../store/cart/cart.action";
import {
	selectCartCount,
	selectCartOpen,
} from "../../store/cart/cart.selector";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

export const CartIcon = () => {
	const dispatch = useDispatch();
	const cartOpen = useSelector(selectCartOpen);
	const cartCount = useSelector(selectCartCount);
	const handleClick = () => dispatch(setCartOpen(!cartOpen));
	return (
		<CartIconContainer onClick={handleClick}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};
