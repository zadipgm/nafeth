import * as React from "react";
import {
  CompnayLogo,
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  GsettingsTitle,
  ImageWrapper,
} from "../style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/material/Input";
import Image from "next/image";
import { cities, countries } from "@/global/fakeData";
import InputComponent from "@/reuseableComponents/InputField";
import { TextField } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
const GlobalSettings = () => {
  const { isDark }: any = useTheme();
  return (
    <>
      <FormContainer>
        <GsettingsTitle>
          <h2>Global Settings</h2>
        </GsettingsTitle>
        <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
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
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="Registration Date"
                  value={"20-01-01"}
                  disabled={true}
                />
                <InputComponent
                  label="Company Name"
                  placeholder="ZADIP GROUP"
                />
                <InputComponent label="PO Box Number" placeholder="12345" />
              </FormBox>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="CR Expiry Date"
                  placeholder="2023-12-31"
                  value={"2023-12-31"}
                  disabled={true}
                />
                <InputComponent label="CR Number" placeholder="7001234576" />
                <InputComponent label="Fax Number" placeholder="966114003880" />
              </FormBox>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="Company Domain Alias"
                  value={"BETA"}
                  disabled={true}
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Country"
                  defaultValue="183"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <InputComponent
                  label="Email"
                  placeholder="muhammad@gmail.com"
                />
              </FormBox>
            </FormBoxWrapper>
            <FormBoxWrapper>
              <FormBox className="global-settings1" color={isTheme().color}>
                <InputComponent label="SMS Balance" value={"9"} disabled />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="City"
                  defaultValue="83"
                >
                  {cities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <InputComponent label="Phone Number" placeholder="581955852" />
              </FormBox>
              <FormBox className="global-settings" color={isTheme().color}>
                <CompnayLogo>
                  <InputComponent
                    label=""
                    classname="company-logo"
                    type="file"
                    helperText="Maximum Size 1mb"
                  />
                  <Image
                    src="/images/car-logo.jpg"
                    alt="compnay-logo"
                    width={270}
                    height={140}
                  />
                </CompnayLogo>
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="global-settings-save-button"
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
export default GlobalSettings;
