import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchStart, firmsSuccess } from '../features/stockSlice';
import { useEffect } from 'react';

export default function Firms() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    getFirms();
  }, []);

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      dispatch(firmsSuccess(data.data));
      return data;
    } catch {}
  };
  return <></>;
}
