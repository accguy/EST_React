import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import User from "./pages/User";

export default function App5() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home name="Travis Scott" />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
