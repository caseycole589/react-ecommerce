import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles";
export const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Link className="nav-link" to="/checkout">
				<Button isLoading={false}>Checkout</Button>
			</Link>
		</CartDropdownContainer>
	);
};
