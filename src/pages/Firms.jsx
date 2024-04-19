import { AirplaySharp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchStart } from '../features/stockSlice';
import { useEffect } from 'react';


export default function Firms() {
  const dispatch = useDispatch();

  useEffect(() => {
    getFirms();
  }, []);

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const data = await axios(`${import.meta.env.BASE_URL}firms`);
      console.log(data);
      return data;
    } catch {}
  };
  return <></>;
}
