import { LoadingContainer } from "@/PageLayout/styled.components";
import { Backdrop } from "@mui/material";
import * as React from "react";
interface IProps {
  open: boolean;
}
const LoadingScreen = ({ open }: IProps) => {
  return (
    <LoadingContainer>
      <Backdrop
        sx={{ color: "#000000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <img src="/images/spinner.svg" alt="spinner" />
      </Backdrop>
    </LoadingContainer>
  );
};
export default LoadingScreen;
