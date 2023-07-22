import React from "react";

const Products = ({ title, image, dimensions, price, features }) => {
  return (
    <div>
      <h2 className="font-semibold text-cyan-900 mt-5 mb-1">{title}</h2>
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
              <p>{dimensions}</p>
            </div>

            <div>
              <h3 className="font-semibold">Features</h3>
              <ul>
                <li>{features}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="space-y-1 flex flex-col">
            <p className="border w-fit border-cyan-600 rounded-sm bg-cyan-800 text-white  ">
              Price: ${price}
            </p>
            <button className="border w-fit border-cyan-600 rounded-sm bg-cyan-600 text-white ">
              View Product
            </button>
            <button className="border w-fit border-cyan-600 rounded-sm bg-cyan-500 text-white ">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
