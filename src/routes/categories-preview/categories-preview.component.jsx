import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
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
