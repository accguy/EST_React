import { useState, createContext } from "react";
import Header from "./components_app4/Header";
import ProductList from "./components_app4/ProductList";
import MyCart from "./components_app4/MyCart";
import { CartProvider } from "./components_app4/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <MyCart />
    </CartProvider>
  );
};

export default App;
