import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
export const Checkout = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} product={item} />
			))}
		</div>
	);
};
