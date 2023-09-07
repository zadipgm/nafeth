import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Wrapper } from "./style";
import { Breakpoint } from "@mui/material";
interface IProps {
  children: React.ReactElement;
  open: boolean;
  handleClose: () => void;
  classname?: string;
  size?: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ModalComponent({
  children,
  open,
  handleClose,
  size,
  classname,
}: IProps) {
  return (
    <Wrapper>
      <Dialog
        className={classname}
        open={open}
        maxWidth={size as Breakpoint}
        fullWidth
        keepMounted
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Dialog>
    </Wrapper>
  );
}
