import { LoadingContainer } from "@/PageLayout/styled.components";
import { Backdrop } from "@mui/material";
import Image from "next/image";
import * as React from "react";
interface IProps {
  open: boolean;
}
const LoadingScreen = ({ open }: IProps) => {
  return (
    <LoadingContainer>
      <Backdrop
        sx={{
          background: "#000000d6",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <Image
          src="/images/spinner.svg"
          alt="spinner"
          width={100}
          height={100}
        />
      </Backdrop>
    </LoadingContainer>
  );
};
export default LoadingScreen;
