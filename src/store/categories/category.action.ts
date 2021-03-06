import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types"

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesFail = (error: Error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)

export const fetchCategoriesSuccess = (categories: Category[]) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)

export const fetchCategoriesAsync = () => async (dispatch: any) => {
  dispatch(fetchCategoriesStart())
  try {
    //Category[] and not any
    const categories: any = await getCategoriesAndDocuments()
    dispatch(fetchCategoriesSuccess(categories))
  } catch (err: any) {
    dispatch(fetchCategoriesFail(err))
  }
}
