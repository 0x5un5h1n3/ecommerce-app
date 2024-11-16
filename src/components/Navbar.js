import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout, cart }) => {
  const totalItems = cart.length;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Ecommerce App
          </Link>
        </Typography>
        {user ? (
          <>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
            <Button color="inherit" component={Link} to="/cart">
              Cart ({totalItems})
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
