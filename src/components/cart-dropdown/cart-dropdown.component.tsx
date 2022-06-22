import { Button } from "primereact/button";
import { CartItem } from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import "./cart-dropdown.styles.scss";
export const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))
				) : (
					<div className="empty-message">Your cart is empty</div>
				)}
			</div>
			<Link className="nav-link" to="/checkout">
				<Button className="cart-checkout-button">Checkout</Button>
			</Link>
		</div>
	);
};
