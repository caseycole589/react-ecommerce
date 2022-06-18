import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { Spinner } from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
export const CategoriesPreview = () => {
	const categories = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categories).map((title) => (
					<CategoryPreview
						key={title}
						title={title}
						products={categories[title]}
					/>
				))
			)}
		</>
	);
};
