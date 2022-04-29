import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
export const CheckoutItem = ({ product }) => {
	const { name, quantity, price, imageUrl } = product;
	const { clearCartItem, addItemToCart, removeCartItem } =
		useContext(CartContext);
	const handleRemoveItem = () => removeCartItem(product);
	const handleAddItem = () => addItemToCart(product);
	const handleClearItem = () => clearCartItem(product);
	return (
		<div>
			<img src={imageUrl} alt={name} />
			<div>{name}</div>
			<div onClick={handleAddItem}>increment</div>
			<div>{quantity}</div>
			<div onClick={handleRemoveItem}>decrement</div>
			<div>{quantity * price}</div>
			<div onClick={handleClearItem}>X</div>
		</div>
	);
};
