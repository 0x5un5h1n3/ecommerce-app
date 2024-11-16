import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = ({ user, handleLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1">
          Ecommerce App
        </Typography>
        {user ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" href="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
