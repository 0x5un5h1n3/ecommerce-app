import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";

const Cart = ({ cartItems, removeFromCart, updateCartItemQuantity }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Price: $${item.price.toFixed(2)} | Quantity: ${
                item.quantity
              }`}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">
        Total: $
        {cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </Typography>
    </div>
  );
};

export default Cart;
