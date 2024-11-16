import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleLogout={handleLogout} cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/register"
          element={<RegisterForm handleLogin={handleLogin} />}
        />
        <Route
          path="/login"
          element={<LoginForm handleLogin={handleLogin} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
