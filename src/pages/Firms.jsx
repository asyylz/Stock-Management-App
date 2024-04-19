import { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';
import { Button, Container, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import FirmCard from '../components/Cards/FirmCard';
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
      <Button variant="contained" sx={{ mb: '4rem' }}>
        New Firm
      </Button>
      <Grid container spacing={2}>
        {firms.map((firm) => (
          <Grid item xs={12} md={4}>
            <FirmCard data={firm} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
