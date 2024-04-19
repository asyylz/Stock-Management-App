import { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';
import { Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Firms() {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  console.log('firms', firms);

  useEffect(() => {
    getStockData('firms');
  }, []);

  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
    </Container>
  );
}
