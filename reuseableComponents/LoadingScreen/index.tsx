import { Backdrop } from "@mui/material";
import * as React from "react";
interface IProps {
  open: boolean;
}
const LoadingScreen = ({ open }: IProps) => {
  console.log("Loading", open);
  return (
    <Backdrop
      sx={{ color: "#1a1818", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <img src="/images/spinner.gif" alt="spinner" />
    </Backdrop>
  );
};
export default LoadingScreen;
