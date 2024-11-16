import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/register" component={RegisterForm} />
        <Route
          path="/login"
          render={(props) => <LoginForm {...props} handleLogin={handleLogin} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
