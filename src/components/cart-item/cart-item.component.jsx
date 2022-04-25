import "./cart-item.styles.scss";
export const CartItem = ({ cartItem }) => {
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
