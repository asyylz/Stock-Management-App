import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchStart, firmsSuccess, fetchFail } from '../features/stockSlice';
import { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';

export default function Firms() {
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData('firms');
  }, []);

  return <></>;
}
