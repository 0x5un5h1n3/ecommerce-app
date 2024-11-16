import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is product 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 9.99,
    description: "This is product 2",
    image: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    name: "Product 3",
    price: 12.99,
    description: "This is product 3",
    image: "https://picsum.photos/200/302",
  },
];

const ProductList = () => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ${product.price}
              </Typography>
              <img src={product.image} alt={product.name} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;