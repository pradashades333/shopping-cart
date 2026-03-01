import React from "react";
import { useState, useEffect } from 'react';


const Shop = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((results) => results.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((error) => console.error("error getting products:", error));
  }, []);

  if (loading) return <h2> loading...</h2>

  return (
    <div>
      <h1> buy the new collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => setCart([...cart,product])}>
              Add to Cart
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Shop;