import "./checkout-item.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
	removeCartItem,
	addItemToCart,
	clearCartItem,
} from "../../store/cart/cart.action";
import { CartItem } from "../../store/cart/cart.types";
import { FC } from "react";
interface CheckoutItemProps {
	product: CartItem;
}

export const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
	const { name, quantity, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const handleRemoveItem = () => dispatch(removeCartItem(product, cartItems));
	const handleAddItem = () => dispatch(addItemToCart(product, cartItems));
	const handleClearItem = () => dispatch(clearCartItem(product, cartItems));
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>

			<span className="name">{name}</span>
			<span className="quantity">
				<span className="text">Qty.</span>
				<div onClick={handleRemoveItem} className="arrow">
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div onClick={handleAddItem} className="arrow">
					&#10095;
				</div>
			</span>
			<span className="price">{quantity * price}</span>
			<div className="remove-button" onClick={handleClearItem}>
				&#10005;
			</div>
		</div>
	);
};
