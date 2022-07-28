import { useSelector } from "react-redux";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import "./checkout.styles.scss";
export const Checkout = () => {
	const cartTotal = useSelector(selectCartTotal);
	const cartItems = useSelector(selectCartItems);
	return (
		<div className="checkout-container">
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} product={item} />
			))}
			<span className="total">Total: ${cartTotal}</span>
		</div>
	);
};
