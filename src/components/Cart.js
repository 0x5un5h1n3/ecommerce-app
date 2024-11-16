import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Typography variant="h4">Your Cart</Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
    </div>
  );
};

export default Cart;
