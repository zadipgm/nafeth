import * as React from "react";
import {
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  Logo,
  Text,
} from "../style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "styled-components";
import { isTheme } from "@/_helpers/getTheme";
import { ICompanyAddress } from "@/models/globalsettings";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { Update } from "@/api/putApis/update";
import Swal from "sweetalert2";
import InputField from "@/reuseableComponents/customInputField/input";
interface ISettings {
  national_address: ICompanyAddress;
}
const NationalAddress = ({ national_address }: ISettings) => {
  const { translations } = useTheme();
  const [national_addressValues, setNational_addressValues] =
    React.useState(national_address);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNational_addressValues({
      ...national_addressValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let body = {
      buildingNo: national_addressValues.buildingNo,
      streetName: national_addressValues.streetName,
      district: national_addressValues.district,
      city: national_addressValues.city,
      country: national_addressValues.country,
      zipCode1: national_addressValues.zipCode1,
      zipCode2: national_addressValues.zipCode2,
    };
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `settings/Global/NationalSetting`;

    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.status === 200) {
          Swal.fire(
            "Thank you!",
            "National Address Settings has been Updated!.",
            "success"
          );
        } else {
          console.log(res);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${res.message}, Try again!`,
          });
        }
      }
    );
  };
  return (
    <>
      <FormContainer>
        <Logo bgcolor="#1c8da4">
          <Image src="/images/spl.svg" alt="nodhom" width={270} height={100} />
          <Text>
            {translations?.spl}
            <br />
            <Link href={"https://splonline.com.sa/"}>
              https://splonline.com.sa/.
            </Link>
          </Text>
        </Logo>
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
              <FormBox className="national-address" color={isTheme().color}>
                <InputField
                  label="Building No."
                  placeholder="2222"
                  defaultValue={national_addressValues.buildingNo}
                  name="buildingNo"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="Street Name"
                  placeholder="Prince Fahad Ibn Ibrahim Al Saud Street, Riyadh"
                  defaultValue={national_addressValues.streetName}
                  name="streetName"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="District"
                  placeholder="Al Malaz"
                  defaultValue={national_addressValues.district}
                  name="district"
                  onChange={(e) => onChangeHandler(e)}
                />

                <InputField
                  label="City"
                  placeholder="Riyadh"
                  defaultValue={national_addressValues.city}
                  name="city"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="Country"
                  placeholder="Saudi Arabia"
                  defaultValue={national_addressValues.country}
                  name="country"
                  onChange={(e) => onChangeHandler(e)}
                />

                <InputField
                  label="ZIP Code"
                  placeholder="12665"
                  defaultValue={national_addressValues.zipCode1}
                  name="zipCode1"
                  classname="zip-code"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="ZIP Code"
                  placeholder="12665"
                  defaultValue={national_addressValues.zipCode2}
                  name="zipCode2"
                  classname="zip-code"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="national-address-save-button"
                onClick={(e) => handleSubmit(e)}
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
