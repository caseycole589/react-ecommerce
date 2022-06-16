import { createSelector } from "reselect"
import { Category, CategoryMap } from "./category.types"
import { CategoriesState } from "./category.reducer"

const selectCategoryReducer = (state): CategoriesState => state.categories

export const selectCategories = createSelector([selectCategoryReducer], categoriesSlice => categoriesSlice.categories)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc: any, category: Category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.isLoading
)
