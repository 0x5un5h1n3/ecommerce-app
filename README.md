# Simple E-commerce Webapp

![product-screenshot]

## Overview

**Simple E-commerce Webapp** is a React application that provides a user-friendly e-commerce experience with user authentication and shopping cart functionality. The application is built using React, React Context, and Material UI, ensuring a responsive and modern design.

### Key Features

- **User Authentication**: Allow users to register, log in, and manage their authentication state using React Context.
- **Product List and Management**: Display a list of products with name, price, description, and images.
- **Shopping Cart**: Enable users to add products to the cart, adjust quantities, remove items, and view the total cost.

### Installation Guide

To set up the application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/0x5un5h1n3/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the application**:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Usage

- Navigate to the homepage to view the list of products.
- Click "Register" to create a new user account.
- Click "Login" to sign in with an existing account.
- Use the "Add to Cart" button to add products to the shopping cart.
- View the shopping cart by clicking on the cart icon in the top right corner.
- Adjust the quantity of items in the cart or remove them as needed.
- View the total cost of items in the cart.

### Technologies Used

- **React**: For building user interfaces and managing state with React Context.
- **Material UI**: For responsive and modern design.

### Performance Optimization

The application follows best practices such as lazy loading images and memoizing components.

### Bonus Features

- Client-Side Routing: Use React Router to create separate routes for login, register, product list, and cart pages.
- Local Storage: Use local storage to persist the shopping cart and user authentication state across page reloads.
- Search and Filter Products: Add search and filter functionality to filter products by name, price, or category.

[product-screenshot]: images/screenshot.png
