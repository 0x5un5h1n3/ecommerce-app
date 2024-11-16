import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom"; // Import Link here

const RegisterForm = ({ handleLogin }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // Handle registration logic here
      handleLogin(values); // Optionally log in the user after registration
      navigate("/login"); // Redirect to login after registration
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Register
      </Button>
      <Button color="secondary" component={Link} to="/login">
        Already have an account? Login here
      </Button>
    </form>
  );
};

export default RegisterForm;
