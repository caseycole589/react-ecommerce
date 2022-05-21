import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
export const CategoriesPreview = () => {
	const categories = useSelector(selectCategoriesMap);
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
