import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
const Products = ({id, title, image, dimensions, price, features }) => {

  const {addProduct}=useContext(CartContext);

  const navigate=useNavigate();
  
  return (
   <div>
      <Link to={`/products/${id}`}>
      <h2 className="font-semibold text-cyan-900 mt-5 mb-1">{title}</h2>
      </Link>
      <div className="flex mx-4">
        <div>
          <img
            src={`assets/${image}`}
            alt="Title Pic"
            height={500}
            width={500}
          />
        </div>
        <div>
          <div className="mx-12">
            <div>
              <h3 className="font-semibold">Dimensions</h3>
              <p className="text-sm">{dimensions}</p>
            </div>

            <div>
              <h3 className="font-semibold">Features</h3>
              <ul>
                <li className="text-sm">{features}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="space-y-1 flex flex-col">
            <p className="border w-fit border-cyan-600 rounded-sm bg-cyan-800 text-white  ">
              Price: ${price}
            </p>
            <button className="border w-fit border-cyan-600 rounded-sm bg-cyan-600 text-white "
            onClick={()=>navigate(`products/${id}`)}>
              View Product
            </button>
            <button
                 onClick={()=>{ addProduct({id,title,price}); navigate('basket')}}
                  className="border w-fit border-cyan-600 rounded-sm bg-cyan-500 text-white ">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Products;
