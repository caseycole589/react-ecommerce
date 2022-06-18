import "./cart-item.styles.scss";
import { CartItem as CartItemType } from "../../store/cart/cart.types";
import { FC } from "react";

interface CartItemProps {
	cartItem: CartItemType;
}
export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<span className="name"> {name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};
