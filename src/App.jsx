import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <Navbar cartCount = {cart.length} />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/shop" element = {<Shop cart = {cart} setCart = {setCart}/>} />
        <Route path = "/cart" element = {<Cart cart = {cart} setCart = {setCart}/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;