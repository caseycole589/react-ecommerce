import { CartItem } from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import "./cart-dropdown.styles.scss";
import { setCartOpen } from "../../store/cart/cart.action";
export const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const handleCheckoutClick = () => dispatch(setCartOpen(false));
	const dispatch = useDispatch();
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
				<button
					onClick={handleCheckoutClick}
					className="cart-checkout-button"
				>
					Checkout
				</button>
			</Link>
		</div>
	);
};
