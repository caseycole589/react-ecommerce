import {
	selectCartTotal,
	selectCartItems,
} from "../../store/cart/cart.selector";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { PaymentForm } from "../../components/payment-form/payment-form.component";
import "./checkout.styles.scss";
export const Checkout = () => {
	const cartTotal = useSelector(selectCartTotal);
	const cartItems = useSelector(selectCartItems);
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} product={item} />
			))}
			<span className="total">Total: ${cartTotal}</span>
			<PaymentForm />
		</div>
	);
};
