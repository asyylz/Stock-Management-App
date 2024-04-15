import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Box, Button, TextField } from "@mui/material";
import AuthHeader from "../AuthHeader";
import AuthImage from "../AuthImage";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";

export default function CustomForm({
  inputQuantity,
  typography,
  initialValues,
  buttonName,
  inputName,
  buttonUnderText,
  navigate,
  validationSchema,
  image,
  ...props
}) {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
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
            {typography}
          </Typography>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {inputQuantity.map((input, index) => (
                    <TextField
                      key={index}
                      id={input}
                      name={input}
                      label={input}
                      value={values[input]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched[input] && Boolean(errors[input])}
                      helperText={touched[input] && errors[input]}
                      {...props}
                    />
                  ))}
                  <Button variant="contained" type="submit">
                    {buttonName}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to={navigate}>{buttonUnderText}</Link>
          </Box>
        </Grid>
        <AuthImage image={image} />
      </Grid>
    </Container>
  );
}
