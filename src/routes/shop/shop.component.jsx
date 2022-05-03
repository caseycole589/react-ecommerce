import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, Fragment } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
export const Shop = () => {
	const { categories } = useContext(CategoriesContext);
	return (
		<>
			{Object.keys(categories).map((title) => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className="products-container">
						{categories[title].map((category) => (
							<ProductCard key={category.id} product={category} />
						))}
					</div>
				</Fragment>
			))}
		</>
	);
};
