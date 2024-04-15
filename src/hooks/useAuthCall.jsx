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
      dispatch(fetchFail());
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
      navigate("/stock");
      //return data;
    } catch (error) {
      dispatch(fetchFail(error));
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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
