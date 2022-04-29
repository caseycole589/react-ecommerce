import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
export const CheckoutItem = ({ product }) => {
	const { name, quantity, price, imageUrl } = product;
	const { clearCartItem, addItemToCart, removeCartItem } =
		useContext(CartContext);
	const handleRemoveItem = () => removeCartItem(product);
	const handleAddItem = () => addItemToCart(product);
	const handleClearItem = () => clearCartItem(product);
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>

			<span className="name">{name}</span>
			<span className="quantity">
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
