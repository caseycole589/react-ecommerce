import { createContext, useState, useEffect } from "react";
import { SHOP_DATA } from "../shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  setProducts: () => null,
  products: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA, 'title');
  // }, []);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
