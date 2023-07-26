import * as React from "react";
import {
  CardContainer,
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  GsettingsTitle,
  Logo,
  Text,
} from "../style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "styled-components";
import Input from "@/reuseableComponents/InputField";
import { isTheme } from "@/_helpers/getTheme";
const TajeerPortal = () => {
  const { translations } = useTheme();
  return (
    <>
      <FormContainer>
        <CardContainer>
          <Logo bgcolor={"#2a4158"}>
            <Image
              src="/images/tajeer.png"
              alt="nodhom"
              width={270}
              height={100}
            />
            <Text>
              {translations?.tajeer}
              <br />
              <Link href={"https://services.taajeer.com/"}>
                https://services.taajeer.com/.
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
              padding: "15px",
            }}
            noValidate
            autoComplete="off"
          >
            <FormBoxWrapper>
              <FormBox className="tajeer" color={isTheme().color}>
                <Input
                  label="Tajeer Application ID"
                  placeholder="c49fda9f"
                  value={""}
                />
                <Input
                  label="Tajeer Application Key"
                  placeholder="0a0ecdd133cbda8414c36b1d9f8f8f51"
                />
                <Input
                  label="Tajeer User Credentials"
                  placeholder="YXBpVXNlcjEwNjYzNzk6RXZpbHNpZGUwMDch"
                />
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="tajeer-portal-details-save-button"
              >
                Save
              </Button>
            </GroupButtons>
          </Box>
        </FormWrapper>
      </FormContainer>
    </>
  );
};
export default TajeerPortal;
