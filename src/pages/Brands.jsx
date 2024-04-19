
import { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';

export default function Brands() {
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("brands");
  }, []);

  return <></>;
}
