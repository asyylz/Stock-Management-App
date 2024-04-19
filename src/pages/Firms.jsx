import { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';

export default function Firms() {
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData('firms');
  }, []);

  return <></>;
}
