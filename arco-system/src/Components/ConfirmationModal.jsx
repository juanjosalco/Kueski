import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function ConfirmationModal(props) {
  const { open, onClose, onConfirm, message } = props;

  function handleConfirm() {
    console.log("User confirmed the operation");
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  }

  function handleCancel() {
    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}  color="primary">Aceptar</Button>
        <Button onClick={handleCancel} color="primary">Regresar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationModal;
