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
import { ICompanyTajeer } from "@/models/globalsettings";
import InputComponent from "@/reuseableComponents/InputField";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { Update } from "@/api/putApis/update";
import Swal from "sweetalert2";
interface ISettings {
  tajeer_portal: ICompanyTajeer;
}
const TajeerPortal = ({ tajeer_portal }: ISettings) => {
  const [tajeer_portalValues, setTajeer_portalValues] =
    React.useState(tajeer_portal);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTajeer_portalValues({
      ...tajeer_portalValues,
      [e.target.name]: e.target.value,
    });
    console.log("onChange", tajeer_portalValues);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let body = {
      tajeerAppId: tajeer_portalValues.tajeerAppId,
      tajeerAppKey: tajeer_portalValues.tajeerAppKey,
      tajeerUserCreditials: tajeer_portalValues.tajeerUserCreditials,
      tajeerAuthorityLicense: tajeer_portalValues.tajeerAuthorityLicense,
    };
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `settings/Global/TajeerSetting`;

    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        console.log("updated", res.message);
        if (res.status === 200) {
          Swal.fire(
            "Thank you!",
            "Tajeer Settings has been Updated!.",
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
  const { translations } = useTheme();
  return (
    <>
      <FormContainer>
        <CardContainer>
          <Logo bgcolor={"#8E3A47"}>
            <Image
              src="/images/tajeer.png"
              alt="tajeer"
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
                <InputComponent
                  label="Tajeer Application ID"
                  placeholder="c49fda9f"
                  defaultValue={tajeer_portal.tajeerAppId}
                  name="tajeerAppId"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputComponent
                  label="Tajeer Application Key"
                  placeholder="0a0ecdd133cbda8414c36b1d9f8f8f51"
                  defaultValue={tajeer_portal.tajeerAppKey}
                  name="tajeerAppKey"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputComponent
                  label="Tajeer User Credentials"
                  placeholder="YXBpVXNlcjEwNjYzNzk6RXZpbHNpZGUwMDch"
                  defaultValue={tajeer_portal.tajeerUserCreditials}
                  name="tajeerUserCreditials"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
            </FormBoxWrapper>
            <FormBoxWrapper>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="Naql Authority License"
                  placeholder="1234542"
                  defaultValue={tajeer_portal.tajeerAuthorityLicense}
                  name="tajeerAuthorityLicense"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="tajeer-portal-details-save-button"
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
export default TajeerPortal;
