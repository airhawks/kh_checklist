import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useDispatch } from "react-redux";
import DialogTitle from "@mui/material/DialogTitle";
import { reset } from "../store/projectIntakeSlice";
import { reset as resetRooms } from "../store/roomsDetailSlice";
import { reset as resetCurtains } from "../store/curtainSlice";
import AddIcon from "@mui/icons-material/Add";
import { getAuth, signOut } from "firebase/auth";

const logout = () => {
  const auth = getAuth();
  signOut(auth);
};

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
    dispatch(resetCurtains());
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClickOpen} startIcon={<AddIcon />}>
        New Project
      </Button>
      <Button variant="outlined" onClick={logout}>
        Logout
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
