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
import { useNavigate } from "react-router-dom";

export default function CustomForm({
  inputQuantity,
  typography,
  initialValues,
  buttonName,
  buttonUnderText,
  nav,
  validationSchema,
  image,
  submitAction,
  afterSubmissionNavigate,
  ...props
}) {
  const navigate = useNavigate();

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
            onSubmit={(values, { setSubmitting }) => {
              submitAction(values);
              console.log(values);
              setSubmitting(false);
              navigate(afterSubmissionNavigate);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              //handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {inputQuantity.map((input, index) => (
                    <TextField
                      key={index}
                      id={input}
                      name={input}
                      label={input.slice(0, 1).toUpperCase() + input.slice(1)}
                      value={values[input]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched[input] && Boolean(errors[input])}
                      helperText={touched[input] && errors[input]}
                      inputProps={{
                        "auto-complete": "off",
                      }}
                      {...props}
                    />
                  ))}
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting" : buttonName}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link
              to={nav}
              style={{
                color: "inherit",
                textDecoration: "inherit",
                fontSize: "25px",
              }}
            >
              {buttonUnderText}
            </Link>
          </Box>
        </Grid>
        <AuthImage image={image} />
      </Grid>
    </Container>
  );
}
