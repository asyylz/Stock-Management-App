import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFail, fetchStart, getSuccess } from '../features/stockSlice';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Token ${token}`,
          // Authorization: `Bearer ${accesstoken}` //* for jwt
        },
      });
      console.log(data);
      // dispatch(brandsSuccess(data.data));
      dispatch(getSuccess({ data: data.data, url: url })); // always single parameter
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getStockData };
};

export default useStockCall;
