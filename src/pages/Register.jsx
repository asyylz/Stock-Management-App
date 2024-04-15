import * as Yup from "yup";
import image from "../assets/regi.avif";
import useAuthCall from "../hooks/useAuthCall";
import CustomForm from "../components/UI/customForm";

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
    .min(8, "It must be at least 8 characters long!")
    .max(50, "It can be a maximum of 50 characters long!")
    .matches(/\d+/, "Must contain at least one digit!")
    .matches(/[A-Z]/, "Must contain at least one capital letter!")
    .matches(
      /[@$?!%&*]+/,
      "Must contain at least one special character (@$!%*?&).!"
    )
    .required(),
});

const initialValues = {
  username: "",
  password: "",
  email: "",
  firstName: "",
  lastName: "",
};

const Register = () => {
  const { register } = useAuthCall();

  return (
    <CustomForm
      inputQuantity={["username", "password", "email", "firstName", "lastName"]}
      typography="REGISTER"
      buttonName="Register"
      buttonUnderText="Already have an account? Sign in"
      navigate="/"
      initialValues={initialValues}
      validationSchema={SignupSchema}
      image={image}
    />
  );
};

export default Register;
