export enum CATEGORIES_ACTION_TYPES {
	// SET_CATEGORIES = "category/SET_CATEGORIES",
	FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
	FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
	FETCH_CATEGORIES_FAIL = "category/FETCH_CATEGORIES_FAIL",
}

export interface CategoryItem {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
	description: string;
}

export interface Category {
	title: string;
	imageUrl: string;
	items: CategoryItem[];
}

export interface CategoryMap {
	[key: string]: CategoryItem[];
}
