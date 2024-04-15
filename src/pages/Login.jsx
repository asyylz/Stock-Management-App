import { useTheme } from "@mui/material";
import * as Yup from "yup";
import CustomForm from "../components/UI/customForm";

const loginValidationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const theme = useTheme();

  return (
    <>
      <CustomForm
        inputQuantity={["username", "password"]}
        typography="SIGN IN"
        buttonName="Login"
        buttonUnderText=" Don't have an account? Sign Up"
        navigate="/register"
      />
    </>
  );
};

export default Login;
