import LockIcon from "@mui/icons-material/Lock";
import { Box, Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import image from "../assets/regi.avif";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";

//!With Yup, we can apply the validation conditions we want to the fields we want.
//we create. Then, by defining this schema we created in formik
//  we are using. In this way, the formik both manages our form and
// Applies validationSchema. The point to be considered is; in formik
// with the keys in the initialValues ​​we defined, the keys we defined in Yup
// be the same. If even one letter is different, what you wrote about that field
//validation does not work.
const SignupSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required("Required!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Er muss mindestens 8 Zeichen lang sein!")
    .max(50, "Er darf maximal 50 Zeichen lang sein!")
    .matches(/\d+/,"Muss mindestens eine Ziffer enthalten!")
    .matches(/[A-Z]/, "Muss mindestens einen Großbuchstaben enthalten!")
    .matches(/[@$?!%&*]+/, "Muss mindestens ein Sonderzeichen (@$!%*?&) enthalten!")
    .required()
});

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form>
                <Box sx={{ display:"flex",flexDirection:"column",gap:2}}>
                  <TextField
                    id="username"
                    name="username" //makes matching based on formik name attribution.
                    label="Username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur} // event indicating that the user left the input field
                    error={touched.username && Boolean(errors.username)} // If it does not fit the pattern we gave in validation, the error attribute expects a false/true value from me to change the color to error, so we return a boolean value to make it healthier.
                    // touched also detects whether the user clicked on the input or not
                    helperText={touched.username && errors.username} //If it does not fit the pattern we gave in validation, we capture the message from errors to show the relevant messages
                  />
                  {/* error ve helperText propertyleri Textfield componentine ait propertyler. */}
                {/* mui textfield kullanmadığımzda <span>{touched.username && errors.username}</span> */}
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="FirstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="LastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />

                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button variant="contained" type="submit">Sign Up</Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
