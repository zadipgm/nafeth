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
  ZipCode,
} from "../style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "styled-components";
import Input from "@/reuseableComponents/InputField";
const NationalAddress = () => {
  const { translations } = useTheme();
  return (
    <>
      <FormContainer>
        <GsettingsTitle className="national-address">
          <h2>National Address</h2>
        </GsettingsTitle>
        <CardContainer>
          <Logo bgColor="#1c8da4">
            <Image
              src="/images/spl.svg"
              alt="nodhom"
              width={270}
              height={100}
            />
            <Text>
              {translations.spl}
              <br />
              <Link href={"https://splonline.com.sa/"}>
                https://splonline.com.sa/.
              </Link>
            </Text>
          </Logo>
        </CardContainer>
        <FormWrapper>
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
              <FormBox className="national-address">
                <Input label="Building No." placeholder="2222" value={""} />
                <Input
                  label="Street Name"
                  placeholder="Prince Fahad Ibn Ibrahim Al Saud Street, Riyadh"
                />
                <Input label="District" placeholder="Al Malaz" />
              </FormBox>
              <FormBox className="national-address">
                <Input label="City" placeholder="Riyadh" value={""} />
                <Input label="Country" placeholder="Saudi Arabia" />
                <ZipCode>
                  <Input label="ZIP Code" placeholder="12665" />
                  <Input label="ZIP Code" placeholder="12665" />
                </ZipCode>
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="national-address-save-button"
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
export default NationalAddress;
