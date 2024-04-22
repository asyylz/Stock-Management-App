import React from "react";
import { useDispatch,useSelector } from "react-redux";
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

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/`, userInfo);

      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail(error));
      toastErrorNotify("Registeration failed!");
      console.log(error);
    }
  };

  const login = async (userCredentials) => {
    console.log('clicked')
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}auth/login`,
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
      const { data } = await axios.get(`${BASE_URL}auth/logout`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      
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
