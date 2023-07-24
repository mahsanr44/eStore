import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate, Link } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  const { getItems } = useContext(CartContext);
  const renderCart = () => {
    const cartItems = getItems();
    console.log(cartItems)
    if (cartItems.length > 0) {
      return cartItems.map((item) => (
        <div className="">
        <div className="flex-col " key={item.id}>
          <div className="flex justify-evenly">

          <Link to={`/products/${item.id}`}> {item.title}</Link>
          <p> {item.quantity}</p>
          <p> {item.price}</p>
          </div>
        </div>
        </div>
      ));
    } else {
      return <div>Basket is Empty!</div>;
    }
  };
  return (
    <div>
      <h1 className="font-bold text-xl p-4">Shopping Basket</h1>
      <div className=" mt-4 flex-col items-cente  border-2 border-cyan-200">
        <div className="font-semibold justify-evenly flex border-2 border-cyan-500">
          <h4>Name</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <div className="">

          <div className="justify-evenly flex  border-2 border-cyan-200">
              <p className="flex">

              {renderCart()}
              </p>
              
       
          </div>
        </div>
      </div>
      <div className="flex space-x-3 p-5 items-center">
        <button className="border-2 bg-cyan-400 px-2 py-1 font-semibold rounded-md border-cyan-600">
          Clear
        </button>
        <button
         onClick={() => navigate("/checkout")}
          className="border-2 border-cyan-400 px-2 py-1 font-semibold rounded-md bg-cyan-600">
          Checkout
        </button>
        <span className="font-bold">Total: $200</span>
      </div>
    </div>
  );
};

export default Basket;
