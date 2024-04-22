import { useEffect, useState } from 'react';
import useStockCall from '../hooks/useStockCall';
import { Button, Container, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import FirmCard from '../components/Cards/FirmCard';
import FirmModal from '../components/Modals/FirmModal';
export default function Firms() {
  const { getStockData } = useStockCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <Button variant="contained" onClick={handleOpen} sx={{ mb: '3rem' }}>
        New Firm
      </Button>
      <Grid container spacing={2}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm.id}>
            <FirmCard {...firm} handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
      <FirmModal open={open} handleClose={handleClose} />
    </Container>
  );
}
