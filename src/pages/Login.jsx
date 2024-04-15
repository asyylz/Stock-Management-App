import { useTheme } from "@mui/material";
import * as Yup from "yup";
import CustomForm from "../components/UI/CustomForm.jsx";
import image from "../assets/hero.png";
import useAuthCall from "../hooks/useAuthCall";

const loginValidationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const theme = useTheme();
  const { login } = useAuthCall();

  return (
    <>
      <CustomForm
        inputQuantity={["username", "password"]}
        typography="SIGN IN"
        buttonName="Login"
        buttonUnderText=" Don't have an account? Sign Up"
        nav="register"
        afterSubmissionNavigate="stock"
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        image={image}
        submitAction={login}
      />
    </>
  );
};

export default Login;
