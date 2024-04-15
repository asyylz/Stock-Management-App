import Avatar from "@mui/material/Avatar";
import { Box, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Form, Formik } from "formik";
import CustomForm from "../components/UI/customForm";

const loginValidationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const theme = useTheme();

  return (
    <>
      <CustomForm inputQuantity={["username", "password"]}
      typography="SIGN IN"
      buttonName="Login" />
    </>

    //   <Container maxWidth="lg">
    //     <Grid
    //       container
    //       justifyContent="center"
    //       direction="row-reverse"
    //       sx={{
    //         height: "100vh",
    //         p: 2,
    //       }}
    //     >
    //       <AuthHeader />

    //       <Grid item xs={12} sm={10} md={6}>
    //         <Avatar
    //           sx={{
    //             backgroundColor: "secondary.light",
    //             m: "auto",
    //             width: 40,
    //             height: 40,
    //           }}
    //         >
    //           <LockIcon size="30" />
    //         </Avatar>
    //         <Typography
    //           variant="h4"
    //           align="center"
    //           mb={2}
    //           color="secondary.light"
    //         >
    //           Register
    //         </Typography>

    //         <Formik
    //           initialValues={{
    //             username: "",
    //             password: "",
    //           }}
    //           //validationSchema={SignupSchema}
    //           onSubmit={(values) => {
    //             console.log("clicked");
    //             // same shape as initial values
    //             console.log(values);
    //             //register(values);
    //           }}
    //         >
    //           {({
    //             values,
    //             errors,
    //             touched,
    //             handleChange,
    //             handleBlur,
    //             handleSubmit,
    //             isSubmitting,
    //           }) => (
    //             <Form>
    //               <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    //                 <TextField
    //                   id="username"
    //                   name="username"
    //                   label="Username"
    //                   value={values.username}
    //                   onChange={handleChange}
    //                   onBlur={handleBlur}
    //                   error={touched.username && Boolean(errors.username)}
    //                   helperText={touched.username && errors.username} //
    //                 />
    //                 <TextField
    //                   id="password"
    //                   name="password"
    //                   type="password"
    //                   label="Password"
    //                   value={values.password}
    //                   onChange={handleChange}
    //                   onBlur={handleBlur}
    //                   error={touched.password && Boolean(errors.password)}
    //                   helperText={touched.password && errors.password}
    //                 />
    //                 <Button variant="contained" type="submit">
    //                   Login
    //                 </Button>
    //               </Box>
    //             </Form>
    //           )}
    //         </Formik>

    //         <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
    //           <Link to="/">Haven't you sign up? Sign up</Link>
    //         </Box>
    //       </Grid>

    //       <AuthImage image={image} />
    //     </Grid>
    //   </Container>
  );
};

export default Login;
