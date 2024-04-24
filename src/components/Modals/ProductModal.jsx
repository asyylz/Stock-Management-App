import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { useState } from 'react';

export default function ProductModal({ open, handleClose }) {
  const [info, setInfo] = useState();
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {//* id varsa edit işlemi
      putStockData("firms", info);
    } else {//* id yoksa create işlemi
      postStockData("products", info);
    }
    handleClose()
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} //* onClose mui modal'a ait bir fonksiyondur.
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={flexColumn}
          >
            
            <TextField
              label="Firm Logo"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
             { info._id ? "Update Product" : "Submit Product"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
