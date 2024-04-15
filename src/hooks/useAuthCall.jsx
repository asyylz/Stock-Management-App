import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchStart } from "../features/authSlice";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await Axios.post(
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
};
