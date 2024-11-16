import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    setTotal(total - product.price);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Shopping Cart
            </Typography>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.name} x {1} = ${product.price}
                  <button onClick={() => handleRemoveFromCart(product)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <Typography variant="body2" color="textSecondary" component="p">
              Total: ${total}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cart;
