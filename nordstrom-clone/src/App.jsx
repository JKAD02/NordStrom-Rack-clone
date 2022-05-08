import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/logIn/Login";
import { Women_Page } from "./components/productPage/women-page";
import { CartProvider } from "react-use-cart";
import { Shoes_Page } from "./components/productPage/shoes-page";
import { Cart } from "./components/cartPage/cart_page";
import { Men_Page } from "./components/productPage/men-page";
import { Kid_Page } from "./components/productPage/kid-page";
import { Gift_Page } from "./components/productPage/gift-page";
import { Clearance } from "./components/clearance/Clearance";
import Payment from "./components/payment/Payment";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/:name' element={<Login />} />
        <Route
          path='/women'
          element={
            <CartProvider>
              <Women_Page />
            </CartProvider>
          }
        />
        <Route
          path='/shoes'
          element={
            <CartProvider>
              <Shoes_Page />
            </CartProvider>
          }
        />
        <Route
          path='/men'
          element={
            <CartProvider>
              <Men_Page />
            </CartProvider>
          }
        />
        <Route
          path='/kid'
          element={
            <CartProvider>
              <Kid_Page />
            </CartProvider>
          }
        />
        <Route
          path='/gift'
          element={
            <CartProvider>
              <Gift_Page />
            </CartProvider>
          }
        />
        <Route
          path='/clearance'
          element={
            <CartProvider>
              <Clearance />
            </CartProvider>
          }
        />
        <Route
          path='/payment'
          element={
            <CartProvider>
              <Payment />
            </CartProvider>
          }
        />
        <Route
          path='/cart'
          element={
            <CartProvider>
              <Cart />
            </CartProvider>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
