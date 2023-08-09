import * as React from "react";
import {
  CardContainer,
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  GsettingsTitle,
  ImageWrapper,
  Logo,
  Text,
} from "../style";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { useTheme } from "styled-components";
import Input from "@/reuseableComponents/InputField";
import { isTheme } from "@/_helpers/getTheme";
import InputComponent from "@/reuseableComponents/InputField";
const Nodhom = () => {
  const { translations } = useTheme();
  return (
    <FormContainer>
      <CardContainer>
        <Logo bgcolor="#44A0E1">
          <Image
            src="/images/nodhom.svg"
            alt="nodhom"
            width={270}
            height={100}
          />
          <Text>
            {translations?.nodhom}
            <br />
            <Link href={"https://nodhom.com/financial"}>
              https://nodhom.com/financial.
            </Link>
          </Text>
        </Logo>
      </CardContainer>

      <FormWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: "100%",
            padding: "5px",
          }}
          noValidate
          autoComplete="off"
        >
          <FormBoxWrapper>
            <FormBox className="nodhom" color={isTheme().color}>
              <InputComponent
                label="Nozm - Client Alias"
                value={"76car-rental-nodhom--76rentdev"}
              />
              <InputComponent
                label="Nozm - Client Secret"
                value={
                  "E997D0563CAD97B4CC9FA9723F0FCB89F5491D5FCC026EF0EE168ABEECD74827"
                }
              />
            </FormBox>
            <FormBox className="nodhom" color={isTheme().color}>
              <InputComponent
                label="Nozm - Client ID"
                value={
                  "3MVG954MqIw6FnnPnlwTdZesZXukEIs0TTNuGxIZi6ndcFNyNqrn_0I3KSdocTwaxQ0XVwCXXUxyuMjl69T8p"
                }
              />

              <InputComponent
                label="Nozm - Username"
                value="admin@76car-rental-nodhom.com.76rentdev"
              />
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox
              className="nodhom-second-last-child"
              color={isTheme().color}
            >
              <InputComponent label="Nozm - Password" value={"Nodhom@1234"} />
            </FormBox>
            <FormBox className="nodhom-last-child" color={isTheme().color}>
              <SwitchesComponent
                title="Enable Nodhom System"
                titlewidth="67%"
                contentwidth="27"
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="nodhom-save-button"
            >
              Save
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </FormContainer>
  );
};
export default Nodhom;
