import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles";
export const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
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
				<Button>Checkout</Button>
			</Link>
		</CartDropdownContainer>
	);
};
