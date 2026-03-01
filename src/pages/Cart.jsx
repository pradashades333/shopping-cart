import React from "react";
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="100" />
              <h3>{item.title}</h3>
              <p>${item.price}</p>

              <div>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <h2>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};



export default Cart;