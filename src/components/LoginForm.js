import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div style={{ padding: "20px" }}>
      {" "}
      <Typography variant="h4" component="h1" gutterBottom>
        {" "}
        Login{" "}
      </Typography>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {" "}
          Login{" "}
        </Button>{" "}
      </form>{" "}
    </div>
  );
};

export default LoginForm;
