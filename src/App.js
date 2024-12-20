import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { Snackbar, Alert } from "@mui/material";

// Sample product data with actual images
const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGxhcHRvcHxlbnwwfHx8fDE2NzA2NTYzMDg&ixlib=rb-4.0.3&q=80&w=400",
    description: "High-performance laptop",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1511381982577-6c0f0b1f9b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE2fHxzbWFydHNob25lfGVufDB8fHx8MTY3MDY1NjMwOA&ixlib=rb-4.0.3&q=80&w=400",
    description: "Latest model smartphone",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE2fHxoZWFkcGhvbmV8ZW58MHx8fHwxNjcwNjU2MzA4&ixlib=rb-4.0.3&q=80&w=400",
    description: "Noise-cancelling headphones",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE5fHxzbWFydHdhdGNofGVufDB8fHx8MTY3MDY1NjMwOA&ixlib=rb-4.0.3&q=80&w=400",
    description: "Advanced smartwatch",
    category: "Wearables",
  },
  {
    id: 5,
    name: "Tablet",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHx0YWJsZXQlMjBpbWFnZXxlbnwwfHx8fDE2NzA2NTYzMDg&ixlib=rb-4.0.3&q=80&w=400",
    description: "Portable tablet",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1586940972064-0c1b2a2f3b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE fHdpcmVsb3VzJTIwZWFyYnVkc3xlbnwwfHx8fDE2NzA2NTYzMDg&ixlib=rb-4.0.3&q=80&w=400",
    description: "True wireless earbuds",
    category: "Accessories",
  },
];

// Create a theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(initialProducts);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleLogin = (userData) => {
    const user = {
      email: userData.email,
      name: userData.email.split("@")[0], // Extract name from email
      id: Date.now(),
    };
    setUser(user);
    showSnackbar("Login successful!");
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    showSnackbar("Logged out successfully.");
  };

  const handleRegister = (userData) => {
    const user = {
      email: userData.email,
      name: userData.email.split("@")[0],
      id: Date.now(),
    };
    setUser(user);
    showSnackbar("Registration successful!");
  };

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
    setTimeout(() => {
      setSnackbar({ open: false, message: "", severity: "success" });
    }, 3000);
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productToRemove.id)
    );
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedCart = localStorage.getItem("cart");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [user, cart]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar
            user={user}
            handleLogout={handleLogout}
            cartItemCount={cart.reduce(
              (total, item) => total + (item.quantity || 1),
              0
            )}
          />
          <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setSnackbar({ ...snackbar, open: false })}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <ProductList products={products} addToCart={addToCart} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/cart"
              element={
                user ? (
                  <Cart
                    cartItems={cart}
                    removeFromCart={removeFromCart}
                    updateCartItemQuantity={updateCartItemQuantity}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                user ? <Navigate to="/" /> : <LoginForm onLogin={handleLogin} />
              }
            />
            <Route
              path="/register"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <RegisterForm onRegister={handleRegister} />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
