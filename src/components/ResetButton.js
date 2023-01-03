import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useDispatch } from "react-redux";
import DialogTitle from "@mui/material/DialogTitle";
import { reset } from "../store/projectIntakeSlice";
import { reset as resetRooms } from "../store/roomsDetailSlice";
import AddIcon from "@mui/icons-material/Add";

export default function ResetButton() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onClickYes = () => {
    dispatch(reset());
    dispatch(resetRooms());
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClickOpen} startIcon={<AddIcon />}>
        New Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to clear current project data?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={onClickYes}>Yes, clear this session!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
