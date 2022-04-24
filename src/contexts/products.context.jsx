import { createContext, useState } from "react";
import SHOPDATA from "../shop-data.json";

export const ProductsContext = createContext({
  setProducts: () => null,
  products: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOPDATA);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
