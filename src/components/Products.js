import React, { useContext } from "react";

import Product from "./Product";
import ProductContext from "../contexts/ProductContext";

// Components

const Products = () => {
  const { products, addItem } = useContext(ProductContext);
  console.log("1", products);
  console.log("2", addItem);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
