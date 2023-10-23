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
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { useTheme } from "styled-components";
import { isTheme } from "@/_helpers/getTheme";
import { ICompanyNozhum } from "@/models/globalsettings";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { Update } from "@/api/putApis/update";
import Swal from "sweetalert2";
import InputField from "@/reuseableComponents/customInputField/input";
interface ISettings {
  nozhum: ICompanyNozhum;
}
const Nodhom = ({ nozhum }: ISettings) => {
  const { translations } = useTheme();
  const [nozhumValues, setNozhumValues] = React.useState(nozhum);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNozhumValues({
      ...nozhumValues,
      [e.target.name]: e.target.value,
    });
  };
  const HanldeSwtiches = (e: { target: { name: any; checked: any } }) => {
    setNozhumValues({
      ...nozhumValues,
      [e.target.name]: e.target.checked === true ? "Y" : "N",
    });
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let body = {
      clientAlias: nozhumValues.clientAlias,
      clientId: nozhumValues.clientId,
      clientSecret: nozhumValues.clientSecret,
      username: nozhumValues.username,
      password: nozhumValues.password,
      enabled: nozhumValues.enabled,
    };
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `settings/Global/NozhumSetting`;

    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.status === 200) {
          Swal.fire(
            "Thank you!",
            "Nozhum Settings has been Updated!.",
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
    <FormContainer>
      <Logo bgcolor="#44A0E1">
        <Image src="/images/nodhom.svg" alt="nodhom" width={270} height={100} />
        <Text>
          {translations?.nodhom}
          <br />
          <Link href={"https://nodhom.com/financial"}>
            https://nodhom.com/financial.
          </Link>
        </Text>
      </Logo>

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
              <InputField
                label={translations?.nozmClientAlias as string}
                defaultValue={nozhumValues.clientAlias}
                name="clientAlias"
                onChange={(e) => onChangeHandler(e)}
              />
              <InputField
                label={translations?.nozmClientSecret as string}
                defaultValue={nozhumValues.clientSecret}
                name="clientSecret"
                onChange={(e) => onChangeHandler(e)}
              />

              <InputField
                label={translations?.nozmClientID as string}
                defaultValue={nozhumValues.clientId}
                name="clientId"
                onChange={(e) => onChangeHandler(e)}
              />

              <InputField
                label={translations?.nozmUsername as string}
                defaultValue={nozhumValues.username}
                name="username"
                onChange={(e) => onChangeHandler(e)}
              />

              <InputField
                label={translations?.nozmPassword as string}
                defaultValue={nozhumValues.password}
                name="password"
                onChange={(e) => onChangeHandler(e)}
              />

              <SwitchesComponent
                title={translations?.enableNodhomSystem as string}
                titlewidth="67%"
                contentwidth="27"
                onchange={HanldeSwtiches}
                name={"enabled"}
                defaultChecked={nozhumValues.enabled === "Y" ? true : false}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="nodhom-save-button"
              onClick={(e) => handleSubmit(e)}
            >
              {translations?.save as string}
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </FormContainer>
  );
};
export default Nodhom;
