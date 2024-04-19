
import { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';

export default function Brands() {
  const { getBrands } = useStockCall();

  useEffect(() => {
    getBrands();
  }, []);

  return <></>;
}
