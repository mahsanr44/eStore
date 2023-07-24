import React from 'react'

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import CartContextProvider from "./context/cartContext";
import Her from './Her';

const App = () => {
  return (
    <div>
      <CartContextProvider>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Her />} />
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="basket" element={<Basket/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    
      </CartContextProvider>
    </div>
  )
}

export default App
