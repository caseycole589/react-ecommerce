import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import { Card } from "primereact/card";

import "./product-card.styles.scss";
interface ProductCardProps {
	product: CategoryItem;
}
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const { imageUrl, name, price } = product;
	const [toggled, setToggled] = useState(false);
	const handleAddItem = () => dispatch(addItemToCart(product, cartItems));
	const handleRotate = () => {
		setToggled(!toggled);
	};
	const description = product.description.split(",");
	const header = <img src={imageUrl} alt={`${name}`} />;
	const footer = (
		<span>
			<button
				className="product-card-button description"
				style={{ marginRight: ".25em" }}
				onClick={handleRotate}
			>
				Description
			</button>
			<button
				className="product-card-button"
				style={{ marginRight: ".25em" }}
				onClick={handleAddItem}
			>
				Add To Cart
			</button>
		</span>
	);
	return (
		<div className="product-card-container">
			<div className="flip-card">
				<div
					className={`flip-card-inner ${
						toggled ? "flip-card-rotated" : ""
					}`}
				>
					<div className="flip-card-front">
						<Card header={header} className="curve-border">
							<div className="product-card-content-container">
								<div className="product-card-content-container-child">
									<span className="product-card-name">
										{name}
									</span>
									<span className="product-card-price">
										${price}
									</span>
								</div>
								{footer}
							</div>
						</Card>
					</div>
					<div className="flip-card-back">
						<Card
							// footer={footer}
							// header={header}
							className="curve-border"
						>
							<div className="product-card-content-back-container">
								<ul>
									{description &&
										description.map((item, index) => (
											<li key={index.toString()}>
												{item}
											</li>
										))}
								</ul>
								{footer}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
