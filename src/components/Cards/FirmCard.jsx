import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
export default function FirmCard({ image, name, address, phone }) {
  return (
    <Card
      sx={{
        height: 390,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0.5rem',
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone:{phone}
        </Typography>
      </CardContent>
      <CardActions>
        <EditIcon />
        <DeleteOutlineIcon />
      </CardActions>
    </Card>
  );
}
