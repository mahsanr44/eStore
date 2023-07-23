import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Products from "./Products";

const Hero = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/categories");
        const data = await res.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleCategoryClick = (id) => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products?catId=${id}`);
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
  return (
    <div>
      <div className="flex">
        <div className="bg-cyan-200">
          {categories.length > 0 ? (
            categories.map((item) => {
              return (
                <div key={item.id}>
                  <Categories
                    id={item.id}
                    title={item.title}
                    onCategoryClick={() => handleCategoryClick(item.id)}
                  />
                </div>
              );
            })
          ) : (
            <p>No Category Found!</p>
          )}
        </div>
        <div className="px-10">
          <h2 className="font-semibold text-2xl py-2">All Products:</h2>
          {products.length > 0 ? (
            products.map((item) => {
              return (
                <Products
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  dimensions={item.specs.dimensions}
                  price={item.price}
                  features={item.features}
                />
              );
            })
          ) : (
            <p>No Product Found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
