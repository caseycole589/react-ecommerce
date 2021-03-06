import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

export interface CategoriesState {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}
export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as any
): CategoriesState => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
