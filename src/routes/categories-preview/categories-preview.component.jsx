import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
export const CategoriesPreview = () => {
	const { categories } = useContext(CategoriesContext);
	return (
		<>
			{Object.keys(categories).map((title) => (
				<CategoryPreview
					key={title}
					title={title}
					products={categories[title]}
				/>
			))}
		</>
	);
};