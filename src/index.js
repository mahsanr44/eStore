import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex  items-center bg-cyan-600 text-white py-4">
     <a href="/">
      <button className="flex mr-40 ml-3 border-2 border-cyan-500 hover:bg-cyan-400 rounded-md px-2 py-0.5">{'Home'}</button>
     </a>
        <h1 className="flex justify-center ml-96  font-bold text-2xl ">
          My Store
        </h1>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="basket" element={<Basket/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    <div>
        <h2 className=" flex justify-center items-center bg-cyan-700 text-white font-bold  py-1">
          Designed with ❤️ By Ahsan
        </h2>
      </div>
  </React.StrictMode>
);
