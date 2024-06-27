import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NavBar from "../NavBar/Navbar";

const theme = createTheme();

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {isSignup ? 'Sign up' : 'Sign in'}
            </Typography>
            {isSignup ? (
              <SignupForm />
            ) : (
              <LoginForm toggleForm={toggleForm} />
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

const LoginForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6).required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle login logic here
      console.log(values);
      navigate('/app');
    },
  });

  const handleSignupClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    toggleForm();
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <Link href="#" variant="body2" onClick={handleSignupClick}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      gender: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      gender: Yup.string().required('Gender is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6).required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle signup logic here
      console.log(values);
      navigate('/app');
    },
  });

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="gender"
        label="Gender"
        name="gender"
        autoComplete="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Create Account
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2" onClick={handleLoginClick}>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
