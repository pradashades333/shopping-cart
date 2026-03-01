import React from "react";

const Cart = ({ cart, setCart }) => {
    const removeCart = (productId) => {
        const newCart = cart.filter((item) => item.id !== productId);
        setCart(newCart);
    };

    return (
        <div>
            <h1>Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} width="100" />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => removeCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default Cart;