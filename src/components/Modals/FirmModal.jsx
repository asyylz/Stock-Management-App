import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const modalFormFields = [
  {
    label: 'Firm Name',
    name: 'name',
    type: 'text',
    id: 'name',
    required: true,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    id: 'password',
    required: true,
  },
  {
    label: 'Firm Address',
    name: 'address',
    type: 'address',
    id: 'address',
    required: true,
  },
  {
    label: 'Firm Phone',
    name: 'phone',
    type: 'phone',
    id: 'phone',
    required: true,
  },
  {
    label: 'Firm Logo',
    name: 'image',
    type: 'text',
    id: 'image',
    required: true,
  },
];

export default function FirmModal({ open, handleClose }) {
  const [info, setInfo] = useState({
    name: '',
    password: '',
    address: '',
    phone: '',
    image: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    setInfo({
      name: '',
      password: '',
      address: '',
      phone: '',
      image: '',
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Firm Information
        </Typography>
        <form
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {modalFormFields.map((field) => (
            <TextField
              key={field.id}
              label={field.label}
              name={field.name}
              id={field.id}
              type={field.type}
              required={field.required}
              variant="outlined"
              value={info[field.name]}
              onChange={handleChange}
            />
          ))}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
