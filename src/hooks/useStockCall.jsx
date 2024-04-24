import axios from 'axios';
import useAxios from './useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFail, fetchStart, getSuccess } from '../features/stockSlice';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios(`${BASE_URL}${url}`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //     // Authorization: `Bearer ${accesstoken}` //* for jwt
      //   },
      // });
      const { data } = await axiosWithToken(`${url}`);
      // dispatch(brandsSuccess(data.data));
      dispatch(getSuccess({ data: data.data, url: url })); // always single parameter
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      // await axios.delete(`${BASE_URL}${url}/${id}`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // });
      await axiosWithToken.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(url);
    }
  };
  const postStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}`, info);
      // getStockData(url)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(url);
    }
  };

  return { getStockData, deleteStockData, postStockData, deleteStockData };
};

export default useStockCall;
