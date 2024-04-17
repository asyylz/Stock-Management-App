import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  registerSuccess,
  loginSuccess,
  logoutSucces,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../helper/ToastNotify";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://18110.fullstack.clarusway.com/users",
        userInfo
      );
      console.log(data);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail(error));
      toastErrorNotify("Registeration failed!");
      console.log(error);
    }
  };

  const login = async (userCredentials) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://18110.fullstack.clarusway.com/auth/login",
        userCredentials
      );
      console.log(data);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Logged in!");
      navigate("/stock");
      //return data;
    } catch (error) {
      dispatch(fetchFail(error));
      toastErrorNotify("Failed to login!");
      console.log(error.response.data.message);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://18110.fullstack.clarusway.com/auth/logout"
      );
      console.log(data);
      dispatch(logoutSucces());
      toastWarnNotify("Logout succesfully!");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error.response.data.message);
      toastErrorNotify("Logout can not be performed");
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
