import React, { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const ProductDetails = () => {
  const navigate=useNavigate()
  const [products, setProducts] = useState([]);

  const { addProduct } = useContext(CartContext);
  const { productId } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products/${productId}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [productId]);

  return (
    <div className="py-3 px-12">
      <h2 className="font-semibold text-cyan-900 mt-5 mb-1">
        {products.title}
      </h2>

      <div className="flex">
        <div>
          <img
            src={`/assets/${products.image}`}
            alt="Title Pic"
            height={2500}
            width={2500}
          />
        </div>
        <div>
          <div className="mx-12">
            <div>
              <h3 className="font-semibold">Features</h3>
              <p className="text-sm text-justify">{products.features}</p>
            </div>

            <div>
              <h3 className="font-semibold">Description</h3>
              <ul>
                <li className="text-sm  text-justify">
                  {products.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="space-y-2 flex flex-col">
          <p className="border w-fit border-cyan-600 rounded-sm bg-cyan-800 text-white  px-1 py-0.5">
            Price: ${products.price}
          </p>

          <button
            onClick={() => {
              addProduct({
                id: products.id,
                title: products.title,
                price: products.price,
              });
              navigate("/basket");
            }}
            className="border w-fit border-cyan-600 rounded-sm bg-cyan-500 text-white px-1 py-0.5"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
