import React from "react";
import { useState, useEffect } from 'react';
import './Shop.css';

const Shop = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const [addedMap, setAddedMap] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((results) => results.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((error) => console.error("error getting products:", error));
  }, []);

  const getQty = (id) => quantities[id] || 1;

  const setQty = (id, val) => {
    const qty = Math.max(1, parseInt(val) || 1);
    setQuantities(prev => ({ ...prev, [id]: qty }));
  };

  const addToCart = (product) => {
    const qty = getQty(product.id);
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
    setAddedMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedMap(prev => ({ ...prev, [product.id]: false })), 1500);
  };

  if (loading) return <h2> loading...</h2>

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1> buy the new collection</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length === 0 && <p className="no-results">No products found.</p>}
      <div className="product-grid">
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className="qty-controls">
              <button onClick={() => setQty(product.id, getQty(product.id) - 1)}>-</button>
              <input
                type="number"
                min="1"
                value={getQty(product.id)}
                onChange={(e) => setQty(product.id, e.target.value)}
              />
              <button onClick={() => setQty(product.id, getQty(product.id) + 1)}>+</button>
            </div>
            <button onClick={() => addToCart(product)}>
              {addedMap[product.id] ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;