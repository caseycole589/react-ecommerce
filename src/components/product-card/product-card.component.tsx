import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";
interface ProductCardProps {
	product: CategoryItem;
}
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const { imageUrl, name, price } = product;

	const handleAddItem = () => dispatch(addItemToCart(product, cartItems));

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button
				isLoading={false}
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={handleAddItem}
			>
				Add To Cart
			</Button>
		</div>
	);
};
