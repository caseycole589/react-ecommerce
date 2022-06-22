import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import "./product-card.styles.scss";
interface ProductCardProps {
	product: CategoryItem;
}
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const { imageUrl, name, price } = product;

	const handleAddItem = () => dispatch(addItemToCart(product, cartItems));
	const header = <img src={imageUrl} alt={`${name}`} />;
	const footer = (
		<span>
			<Button
				label="Add To Cart"
				icon="pi pi-check"
				style={{ marginRight: ".25em" }}
				onClick={handleAddItem}
			/>
		</span>
	);
	return (
		<div className="product-card-container">
			<Card footer={footer} header={header} className="curve-border">
				<div className="product-card-content-container">
					<span className="product-card-name">{name}</span>
					<span className="product-card-price">${price}</span>
				</div>
			</Card>
			{/*	<div className="footer">
			</div>*/}
			{/*<Button
				isLoading={false}
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={handleAddItem}
			>*/}
			{/*Add To Cart*/}
			{/*</Button>*/}
		</div>
	);
};
