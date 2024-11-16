import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
