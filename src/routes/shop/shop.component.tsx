import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

import { Category } from "../category/category.component";
import "./shop.styles.scss";

export const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesAsync() as any);
	}, [dispatch]);

	return (
		<Routes>
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};
