import React, { useState } from "react";

import CartContext from "./contexts/CartContext";
import Navigation from "./components/Navigation";
import ProductContext from "./contexts/ProductContext";
import Products from "./components/Products";
import { Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import data from "./data";

// Components

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <Navigation />
        </CartContext.Provider>
      </ProductContext.Provider>

      {/* Routes */}
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <Route exact path="/">
            <Products />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>

      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
