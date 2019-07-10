import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function SaleCardFormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sale details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Date"
            type="date"
          />
          <TextField margin="dense" id="price" label="Price" type="number" />
          <TextField margin="dense" id="name" label="Seller" type="text" />
          <TextField margin="dense" id="notary" label="Notaire" type="text" />
          <TextField
            margin="dense"
            id="notaryFees"
            label="Frais notaire"
            type="number"
          />
          <TextField margin="dense" id="desc" label="Description" type="text" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
