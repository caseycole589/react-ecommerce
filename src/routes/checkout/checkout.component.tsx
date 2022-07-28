import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import "./checkout.styles.scss";
export const Checkout = () => {
	const cartTotal = useSelector(selectCartTotal);
	const cartItems = useSelector(selectCartItems);
	const handleCheckoutClick = () => {};
	return (
		<div className="checkout-container">
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} product={item} />
			))}
			<div className="total-container">
				<div className="total-text-container">
					<span className="total">Total: ${cartTotal}</span>
				</div>
				<div>
					<Link className="nav-link" to="/payment">
						<button
							onClick={handleCheckoutClick}
							className="checkout-button"
						>
							Checkout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
