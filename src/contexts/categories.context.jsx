import { createContext, useState, useEffect } from "react";
// import { SHOP_DATA } from "../shop-data.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  //for getting data into firebase
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA, 'title');
  // }, []);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
